ActiveAdmin.register Category do

  filter :identifier

  permit_params do
    %i(identifier)
  end

  # For some reason, inherited resource update does not work.
  def update
    region = resource
    region.update_attributes(params[:category])
    super
  end

  index do
    selectable_column
    column :id
    column :identifier
    column :name, :sortable => false
    actions
  end
end
