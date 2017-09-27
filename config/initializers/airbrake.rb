require 'airbrake-ruby'

# https://github.com/airbrake/airbrake-ruby#configuration
Airbrake.configure do |config|
  config.project_id = ENV['AIRBRAKE_PROJECT_ID']
  config.project_key = ENV['AIRBRAKE_API_KEY']
  config.environment = Rails.env
  config.ignore_environments = %w(test)
  config.root_directory = Rails.root
  config.blacklist_keys = [/password/i, /authorization/i]
  config.logger = Rails.logger

  # Do not notify if exception is one of the following
  Airbrake.add_filter do |notice|
    if notice.stash[:exception].is_a?([
      'Rosemary::Conflict',
      'Rosemary::ServerError',
      'Rosemary::Gone',
      'Rosemary::Unavailable',
      'Net::ReadTimeout'
    ])
      notice.ignore!
    else
      Aibrake.notify(notice)
    end
  end
end
