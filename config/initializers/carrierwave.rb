require 'carrierwave'

CarrierWave.configure do |config|
  config.fog_credentials = {
    :provider               => 'AWS',       # required 
    :aws_access_key_id      => ENV['ACCESS_KEY'], # required
    :aws_secret_access_key  => ENV['SECRET_KEY'] # required
  }
  config.fog_directory  = ENV['AWS_BUCKET']                     # required

end
