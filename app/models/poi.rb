class Poi < ActiveRecord::Base
  
  include ActionView::Helpers::TagHelper
  include ActionView::Helpers::UrlHelper
  include ActionView::Helpers::AssetTagHelper
  
  self.include_root_in_json = false
  
  include PopupHelper
  
  WHEELCHAIR_STATUS_VALUES = {:yes => 1, :limited => 2, :no => 4, :unknown => 8}

    # Tags sollen fuer die Datenbank serialisiert werden

    serialize :tags
    
    # osm_id ist der Primaerschluessel

    set_primary_key :osm_id
    
    validate :relevant?
    
    before_save :set_status
    
    # Spezielle Find-Methode fuer den Zugriff auf alle POIs in einer 
    # Bounding-Box. Fruehere Versionen von GeoRuby hatten dazu etwas
    # im MySQL-Adapter, aber das wird inzwischen nicht mehr supported,
    # daher bauen wir hier einen Standard-Contains-Query. Dieser Query
    # benutzt den raeumlichen Index und geht daher schnell (wenn man 
    # nicht gerade eine Bounding-Box fuer die ganze Welt uebergibt).
    
    scope :fully_accessible, :conditions => {:status => WHEELCHAIR_STATUS_VALUES[:yes]}
    scope :not_accessible, :conditions => {:status => WHEELCHAIR_STATUS_VALUES[:no]}
    scope :limited_accessible, :conditions => {:status => WHEELCHAIR_STATUS_VALUES[:limited]}
    scope :unknown_accessibility, :conditions => {:status => WHEELCHAIR_STATUS_VALUES[:unknown]}
    
    scope :within_bbox, lambda {|left, bottom, right, top|{
      :conditions => "MBRContains(GeomFromText('POLYGON(( \
                      #{left} #{bottom}, #{right} #{bottom}, \
                      #{right} #{top}, #{left} #{top}, \
                      #{left} #{bottom}))'), pois.geom)" } }
    
    def lat
      self.geom.lat if self.geom
    end
    
    def lon
      self.geom.lng if self.geom
    end
    
    def attributes
      super.reverse_merge!(
      'lat' => lat,
      'lon' => lon,
      'name' => name,
      'type' => type,
      'category' => category,
      'wheelchair' => wheelchair,
      'wheelchair_description' => wheelchair_description
      )
    end
    
    def as_json(options={})
      options.merge!(:methods => [:id, :state, :icon, :type], :except => [:geom, :version, :osm_id])
      super(options)
    end

    def id
      osm_id
    end
      
    
    def type
      tags['amenity']   ||
      tags['shop']      ||
      tags['tourism']   ||
      tags['natural']   ||
      tags['sport']     ||
      tags['leisure']   ||
      tags['historic']  ||
      tags['highway']   ||
      tags['station']   ||
      tags['railway']
    end
    
    def category
      Amenities.each do |cat, amenities|
        return cat.to_s if amenities.include?(self.type)
      end
      nil
    end

    def name
      tags['name']
    end

    def wheelchair
      tags['wheelchair'] ||= 'unknown'
    end

    def wheelchair_description
      tags['wheelchair:description']
    end
    
    def headline
      self.name || I18n.t("poi.name.#{self.category}.#{self.type}")
    end
    
    def url
      "/nodes/#{self.osm_id}"
    end
    
    def address
      [render_street(self),render_city(self)].compact.join(', ')
    end
    
    def state
      'yes'
    end

    def to_geojson(options={})
      return if type.blank? || category.blank?
      result = { :type => 'Feature',
        :geometry => { :type => 'Point', :coordinates  => [self.lon, self.lat]
        },
        :properties => tags.reverse_merge!( 'url' => url,
                                            'headline' => headline,
                                            'address' => address,
                                            'wheelchair' => wheelchair,
                                            'osm_id' => osm_id,
                                            'type' => type,
                                            'category' => category,
                                            'icon' => icon).reject{|k,v| v.blank?}
      }
      result
    end
        
    def icon
      icon_name = ''
      if type.blank?
        icon_name = 'cross-small-white'
      else
        icon_name = Icons[type.to_sym] || 'cross-small-white'
      end
      ['/images', 'icons', icon_name].join '/'
    end

    def relevant?
      if !tags.blank? &&
        ( tags.has_key?('amenity') ||
        tags.has_key?('shop') ||
        tags.has_key?('tourism') ||
        tags.has_key?('natural') ||
        tags.has_key?('sport') ||
        tags.has_key?('leisure') ||
        tags.has_key?('historic'))
        # valid!
      else
        errors.add(:tags, "needs to have at least one of the following keys: amenity, tourism natural sport leisure shop historic")
      end
    end

    def existing_record!
        @new_record = false
    end
    
    def set_status
      self.status = WHEELCHAIR_STATUS_VALUES[wheelchair.to_sym]
    end
end
