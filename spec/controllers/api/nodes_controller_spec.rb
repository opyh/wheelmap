require 'spec_helper'

class UpdateJob < ActiveRecord::Base
  set_table_name 'delayed_jobs'
end

class CreateJob < ActiveRecord::Base
  set_table_name 'delayed_jobs'
end

class UpdateAttributeJob <ActiveRecord::Base
  set_table_name 'delayed_jobs'
end

describe Api::NodesController do
  include Devise::TestHelpers
  render_views

  before :each do
    User.delete_all
    @user = Factory.create(:user)
  end

  describe 'index action' do
    before :each do
      Poi.delete_all
      @nodes = [Factory.create(:poi, :osm_id => 1, :tags => {'wheelchair' => 'yes', 'name' => 'name', 'amenity' => 'bar'}), Factory.create(:poi, :osm_id => 2, :tags => {'wheelchair' => 'yes', 'name' => 'name', 'amenity' => 'bar'})]
    end

    describe 'format json' do

      it "should render json when using accept header" do
        request.env['HTTP_ACCEPT'] = 'application/json'
        get(:index, :api_key => @user.authentication_token)
        request.format.to_sym.should eql(:json)
      end

      it "should render json as default format" do
        get(:index, :api_key => @user.authentication_token)
        response.should be_success
        request.format.to_sym.should eql(:json)
      end

      it "should render result object" do
        get(:index, :api_key => @user.authentication_token)
        json = JSON.parse(response.body)
        json['nodes'].should_not be_nil
      end

      it "should render conditions object" do
        get(:index, :api_key => @user.authentication_token)
        json = JSON.parse(response.body)
        json['conditions'].should_not be_nil
        p = json['conditions']
        p['format'].should eql('json')
      end

      it "should render meta object" do
        get(:index, :api_key => @user.authentication_token)
        json = JSON.parse(response.body)
        json['meta'].should_not be_nil
        p = json['meta']
        p['num_pages'].should eql 1

      end

      it "should render result object containing a node" do
        get(:index, :api_key => @user.authentication_token)
        response.should be_success
        json = JSON.parse(response.body)
        json['nodes'].should_not be_empty
        node = json['nodes'].first
        node['lat'].should eql 52.0
        node['lon'].should eql 13.4
        node['wheelchair'].should eql 'yes'
      end

    end

    describe 'format xml' do
      before :each do
        request.env['HTTP_ACCEPT'] = 'application/xml'
      end

      it "should render xml when using accept header" do
        get(:index, :api_key => @user.authentication_token)
        request.format.to_sym.should eql(:xml)
      end

      it "should render result object" do
        get(:index, :api_key => @user.authentication_token)
        response.body.should =~ /<conditions>/
      end
      it "should render params object" do
        get(:index, :api_key => @user.authentication_token)
        response.body.should =~ /<meta>/
      end
    end
  end

  shared_examples "update_wheelchair" do

    it "access should be denied if api key is missing" do
      put(:update_wheelchair, {:id => @node.id, :name => 'Something new'})
      response.status.should eql 401
    end

    it "should accept update wheelchair status for later processing if params are valid" do
      lambda {
        put(:update_wheelchair, {:id => @node.id, :wheelchair => 'no', :api_key => @user.authentication_token})
        response.status.should eql 202
        response.body.should =~ /OK/
      }.should change(UpdateAttributeJob, :count).by(1)
    end

    it "should not accept update wheelchair status for later processing if params are invalid" do
      lambda {
        put(:update_wheelchair, {:id => @node.id, :wheelchair => 'invalid', :api_key => @user.authentication_token})
        response.status.should eql 406
      }.should change(UpdateAttributeJob, :count).by(0)
    end
  end

  describe 'as a node' do

    before :each do
      @wheelmap_visitor = Factory.create(:user, :email => 'visitor@wheelmap.org')
      Poi.delete_all
      @node = Factory.create(:poi, :tags => {'wheelchair' => 'yes', 'name' => 'name', 'amenity' => 'bar'})
    end

    it_behaves_like "update_wheelchair"
  end

  describe 'as a way' do

    before :each do
      @wheelmap_visitor = Factory.create(:user, :email => 'visitor@wheelmap.org')
      Poi.delete_all
      @node = Factory.create(:poi, :osm_id => (Factory.next(:version) * -1), :tags => {'wheelchair' => 'yes', 'name' => 'name', 'amenity' => 'bar'})
    end

    it_behaves_like "update_wheelchair"
  end


  describe 'update action' do
    before :each do
      @node = Factory.create(:poi, :tags => {'wheelchair' => 'yes', 'name' => 'name', 'amenity' => 'bar'})
    end

    it "access should be denied if api key is missing" do
      put(:update, {:id => @node.id, :name => 'Something new'})
      response.status.should eql 401
    end

    it "access should be denied if osm credentials are missing" do
      put(:update, {:id => @node.id, :name => 'Something new', :api_key => @user.authentication_token, :locale => 'en'})
      response.status.should eql 403
      response.body.should =~ /Um Daten zu \\u00e4ndern ben\\u00f6tigst Du einen OpenStreetMap Account./
    end

    it "should not update node when params are missing or invalid" do
      @user.oauth_token = :a_token
      @user.oauth_secret = :a_secret
      @user.save!

      Poi.should_receive(:find).with(@node.id).and_return(@node)
      @node.should_receive(:valid?).and_return(false)
      lambda {
        put(:update, {:id => @node.id, :api_key => @user.authentication_token})
        response.status.should eql 400
      }.should change(UpdateJob, :count).by(0)

    end

    it "should accept update for later processing if params are valid" do
      @user.oauth_token = :a_token
      @user.oauth_secret = :a_secret
      @user.save!

      lambda {
        put(:update, {:id => @node.id, :lat => 52.0, :lon => 13.4, :type => 'bar', :name => 'Cocktails on the rocks', :wheelchair => 'no', :api_key => @user.authentication_token})
        response.status.should eql 202
      }.should change(UpdateJob, :count).by(1)
    end

    it "should not be possible to update a way" do
      @user.oauth_token = :a_token
      @user.oauth_secret = :a_secret
      @user.save!
      # Ways are the same as Nodes but with negative id
      @node.osm_id = (@node.osm_id * -1)
      lambda {
        put(:update, {:id => @node.id, :lat => 52.0, :lon => 13.4, :type => 'bar', :name => 'Cocktails on the rocks', :wheelchair => 'no', :api_key => @user.authentication_token})
        response.status.should eql 406
      }.should_not change(UpdateJob, :count)
    end
  end

  describe 'create action' do

    it "access should be denied if api key is missing" do
      lambda{
        post(:create, {:name => 'Something new'})
      }.should_not change(CreateJob, :count)
      response.status.should eql 401
    end

    it "access should be denied if osm credentials are missing" do
      lambda{
        post(:create, {:name => 'Something new', :api_key => @user.authentication_token})
      }.should_not change(CreateJob, :count)
      response.status.should eql 403
      response.body.should =~ /Um Daten zu \\u00e4ndern ben\\u00f6tigst Du einen OpenStreetMap Account./
    end

    it "should not create node when params are missing or invalid" do
      @user.oauth_token = :a_token
      @user.oauth_secret = :a_secret
      @user.save!
      lambda {
        post(:create, {:lat => 52.0, :lon => 13.4, :name => 'Something new', :api_key => @user.authentication_token})
        response.status.should eql 400
      }.should_not change(CreateJob, :count)
    end

    it "create node job for later processing if params are valid" do
      @user.oauth_token = :a_token
      @user.oauth_secret = :a_secret
      @user.save!
      lambda {
        post(:create, {:lat => 52.0, :lon => 13.4, :type => 'bar', :name => 'Cocktails on the rocks', :wheelchair => 'no', :api_key => @user.authentication_token})
        response.status.should eql 202
      }.should change(CreateJob, :count).by(1)

    end
  end
end
