I18n.translations || (I18n.translations = {});
I18n.translations["vi_VN"] = {"date":{"formats":{"default":"%Y-%m-%d","short":"%b %d","long":"%B %d, %Y"},"day_names":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"abbr_day_names":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"month_names":["","January","February","March","April","May","June","July","August","September","October","November","December"],"abbr_month_names":["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"order":["year","month","day"]},"time":{"formats":{"default":"%a, %d %b %Y %H:%M:%S %z","short":"%d %b %H:%M","long":"%B %d, %Y %H:%M"},"am":"am","pm":"pm"},"support":{"array":{"words_connector":",","two_words_connector":" and ","last_word_connector":" and ","sentence_connector":"and","skip_last_comma":true},"select":{"prompt":"Please select"}},"errors":{"format":"%{attribute} %{message}","messages":{"inclusion":"not a valid value","exclusion":"is reserved","invalid":"not valid","confirmation":"doesn't match confirmation","accepted":"has to be accepted","empty":"has to be filled","blank":"has to be filled","too_long":"is too long (not more than %{count} characters)","too_short":"is too short (not less than %{count} characters)","wrong_length":"is the wrong length (should be %{count} characters)","not_a_number":"is not a number","not_an_integer":"must be an integer","greater_than":"must be greater than %{count}","greater_than_or_equal_to":"must be greater or equal than %{count}","equal_to":"must be exactly %{count}","less_than":"must be less than %{count}","less_than_or_equal_to":"must be lower or equal than %{count}","odd":"must be odd","even":"must be even","carrierwave_processing_error":"failed to be processed","carrierwave_integrity_error":"is not of an allowed file type","carrierwave_download_error":"could not be downloaded","extension_white_list_error":"You are not allowed to upload %{extension} files, allowed types: %{allowed_types}","extension_black_list_error":"You are not allowed to upload %{extension} files, prohibited types: %{prohibited_types}","rmagick_processing_error":"Failed to manipulate with rmagick, maybe it is not an image? Original Error: %{e}","mime_types_processing_error":"Failed to process file with MIME::Types, maybe not valid content-type? Original Error: %{e}","mini_magick_processing_error":"Failed to manipulate with MiniMagick, maybe it is not an image? Original Error: %{e}","already_confirmed":"was already confirmed, please try signing in","expired":"has expired, please request a new one","not_found":"not found","not_locked":"was not locked","not_saved":{"one":"1 error prohibited this %{resource} from being saved:","other":"%{count} errors prohibited this %{resource} from being saved:"},"taken":"has already been taken","confirmation_period_expired":"needs to be confirmed within %{period}, please request a new one"},"models":{"node":{"website":{"invalid":"Website address is not valid."},"phone":{"invalid":"Phone number is not valid. It must have the following format: +49 30 234567"}}},"dynamic_format":"%{message}","template":{"body":"There were problems with the following fields:","header":{"one":"1 error prohibited this %{model} from being saved","other":"%{count} errors prohibited this %{model} from being saved"}}},"activerecord":{"errors":{"messages":{"taken":"has already been taken","record_invalid":"Validation failed: %{errors}","accepted":"must be accepted","blank":"can't be blank","confirmation":"doesn't match confirmation","empty":"can't be empty","equal_to":"must be equal to %{count}","even":"must be even","exclusion":"is reserved","greater_than":"must be greater than %{count}","greater_than_or_equal_to":"must be greater than or equal to %{count}","inclusion":"is not included in the list","invalid":"is invalid","less_than":"must be less than %{count}","less_than_or_equal_to":"must be less than or equal to %{count}","not_a_number":"is not a number","not_equal_to":"must not be equal to %{count}","odd":"must be odd","too_long":"is too long (maximum is %{count} characters)","too_short":"is too short (minimum is %{count} characters)","wrong_length":"is the wrong length (should be %{count} characters)"},"full_messages":{"format":"%{attribute} %{message}"},"models":{"user":{"attributes":{"email":{"blank":"can't be blank if password is given"},"privacy_policy":{"accepted":"must be accepted"},"terms":{"accepted":"must be accepted"}}},"user_session":{"email":"Email address","password":"Password","remember_me":"Stay logged in"}},"template":{"body":"There were problems with the following fields:","header":{"one":"1 error prohibited this %{model} from being saved","other":"%{count} errors prohibited this %{model} from being saved"}}},"attributes":{"user":{"first_name":"Given name","last_name":"Last name","privacy_policy":"Privacy policy","terms":"Terms"},"poi":{"name":"Name","type":"Type","address":"Address","website":"Website","phone":"Phone","note":"Note","address_street":"Street","address_housenumber":"Housenumber","address_postcode":"Postcode","address_city":"City"}},"models":{"user":"User"}},"number":{"format":{"separator":".","delimiter":",","precision":3,"significant":0,"strip_insignificant_zeros":0},"currency":{"format":{"format":"%u%n","unit":"$","separator":".","delimiter":",","precision":2,"significant":0,"strip_insignificant_zeros":0}},"percentage":{"format":{}},"precision":{"format":{}},"human":{"format":{"precision":3,"significant":true,"strip_insignificant_zeros":true},"storage_units":{"format":"%n %u","units":{"byte":{"one":"Byte","other":"Bytes"},"kb":"KB","mb":"MB","gb":"GB","tb":"TB"}},"decimal_units":{"format":"%n %u","units":{"thousand":"Thousand","million":"Million","billion":"Billion","trillion":"Trillion","quadrillion":"Quadrillion"}}}},"datetime":{"distance_in_words":{"half_a_minute":"half a minute","less_than_x_seconds":{"one":"less than 1 second","other":"less than %{count} seconds"},"x_seconds":{"one":"1 second","other":"%{count} seconds"},"less_than_x_minutes":{"one":"less than a minute","other":"less than %{count} minutes"},"x_minutes":{"one":"1 minute","other":"%{count} minutes"},"about_x_hours":{"one":"about 1 hour","other":"about %{count} hours"},"x_days":{"one":"1 day","other":"%{count} days"},"about_x_months":{"one":"about 1 month","other":"about %{count} months"},"x_months":{"one":"1 month","other":"%{count} months"},"about_x_years":{"one":"about 1 year","other":"about %{count} years"},"over_x_years":{"one":"over 1 year","other":"over %{count} years"},"almost_x_years":{"one":"almost 1 year","other":"almost %{count} years"}},"prompts":{"year":"Year","month":"Month","day":"Day","hour":"Hour","minute":"Minute","second":"Seconds"}},"helpers":{"select":{"prompt":"Please choose"},"submit":{"create":"create %{model}","update":"update %{model}","submit":"save %{model}"},"button":{"create":"Create %{model}","update":"Update %{model}","submit":"Save %{model}"},"page_entries_info":{"one_page":{"display_entries":{"zero":"No %{entry_name} found","one":"Displaying <b>1</b> %{entry_name}","other":"Displaying <b>all %{count}</b> %{entry_name}"}},"more_pages":{"display_entries":"Displaying %{entry_name} <b>%{first}&nbsp;-&nbsp;%{last}</b> of <b>%{total}</b> in total"}}},"flash":{"actions":{"create":{"notice":"%{resource_name} was successfully created"},"update":{"notice":"%{resource_name} was successfully updated"},"destroy":{"notice":"%{resource_name} was successfully deleted","alert":"%{resource_name} could not be removed"}},"photos":{"destroy":{"notice":"Image was successfully deleted"}}},"meta_search":{"or":"or","predicates":{"equals":"%{attribute} equals","does_not_equal":"%{attribute} doesn't equal","contains":"%{attribute} contains","does_not_contain":"%{attribute} doesn't contain","starts_with":"%{attribute} starts with","does_not_start_with":"%{attribute} doesn't start with","ends_with":"%{attribute} ends with","does_not_end_with":"%{attribute} doesn't end with","greater_than":"%{attribute} greater than","less_than":"%{attribute} less than","greater_than_or_equal_to":"%{attribute} greater than or equal to","less_than_or_equal_to":"%{attribute} less than or equal to","in":"%{attribute} is one of","not_in":"%{attribute} isn't one of","is_true":"%{attribute} is true","is_false":"%{attribute} is false","is_present":"%{attribute} is present","is_blank":"%{attribute} is blank","is_null":"%{attribute} is null","is_not_null":"%{attribute} isn't null"}},"active_admin":{"dashboard":"Dashboard","dashboard_welcome":{"welcome":"Welcome to Active Admin. This is the default dashboard page.","call_to_action":"To add dashboard sections, checkout 'app/admin/dashboard.rb'"},"view":"View","edit":"Edit","delete":"Delete","delete_confirmation":"Are you sure you want to delete this?","new_model":"New %{model}","create_model":"New %{model}","edit_model":"Edit %{model}","update_model":"Edit %{model}","delete_model":"Delete %{model}","details":"%{model} Details","cancel":"Cancel","empty":"Empty","previous":"Previous","next":"Next","download":"Download:","has_many_new":"Add New %{model}","has_many_delete":"Delete","filter":"Filter","clear_filters":"Clear Filters","search_field":"Search %{field}","equal_to":"Equal To","greater_than":"Greater Than","less_than":"Less Than","main_content":"Please implement %{model}#main_content to display content.","logout":"Logout","powered_by":"Powered by %{active_admin} %{version}","sidebars":{"filters":"Filters"},"pagination":{"empty":"No %{model} found","one":"Displaying <b>1</b> %{model}","one_page":"Displaying <b>all %{n}</b> %{model}","multiple":"Displaying %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b> of <b>%{total}</b> in total","entry":{"one":"entry","other":"entries"},"multiple_without_total":"Displaying %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b>"},"any":"Any","blank_slate":{"content":"There are no %{resource_name} yet.","link":"Create one"},"batch_actions":{"button_label":"Batch Actions","delete_confirmation":"Are you sure you want to delete these %{plural_model}? You won't be able to undo this.","succesfully_destroyed":{"one":"Successfully destroyed 1 %{model}","other":"Successfully destroyed %{count} %{plural_model}"},"selection_toggle_explanation":"(Toggle Selection)","link":"Create one","action_label":"%{title} Selected","labels":{"destroy":"Delete"}},"comments":{"body":"Body","author":"Author","title":"Comment","add":"Add Comment","resource":"Resource","no_comments_yet":"No comments yet.","title_content":"Comments (%{count})","errors":{"empty_text":"Comment wasn't saved, text was empty."},"resource_type":"Resource Type","author_type":"Author Type"},"devise":{"login":{"title":"Login","remember_me":"Remember me","submit":"Login"},"reset_password":{"title":"Forgot your password?","submit":"Reset My Password"},"change_password":{"title":"Change your password","submit":"Change my password"},"links":{"sign_in":"Sign in","forgot_your_password":"Forgot your password?","sign_in_with_omniauth_provider":"Sign in with %{provider}"},"unlock":{"title":"Resend unlock instructions","submit":"Resend unlock instructions"}},"has_many_remove":"Remove","filters":{"buttons":{"filter":"Filter","clear":"Clear Filters"},"predicates":{"contains":"Contains","equals":"Equals","starts_with":"Starts with","ends_with":"Ends with","greater_than":"Greater than","less_than":"Less than"}},"access_denied":{"message":"You are not authorized to perform this action."},"index_list":{"table":"Table","block":"List","grid":"Grid","blog":"Blog"}},"devise":{"confirmations":{"confirmed":"Your account was successfully confirmed. You are now signed in.","link":"Didn't receive confirmation instructions?","send_instructions":"You will receive an email with instructions about how to confirm your account in a few minutes.","send_paranoid_instructions":"If your email address exists in our database, you will receive an email with instructions about how to confirm your account in a few minutes."},"destroy":{"confirm":"Are you sure?","headline":"Delete Account","link":"Delete now"},"edit":{"form":{"labels":{"current_password":"Current password <i>(we need it to confirm your changes)</i>","email":"Email","password":"Password <i>(leave empty if you don\\'t want to change it)</i>","password_confirmation":"Repeat password"},"submit":"Save changes"},"headline":"Edit account"},"failure":{"already_authenticated":"You are already signed in.","inactive":"Your account was not activated yet.","invalid":"Invalid email or password.","invalid_token":"Invalid authentication token.","locked":"Your account is locked.","timeout":"Your session expired, please sign in again to continue.","unauthenticated":"You need to sign in or sign up before continuing.","unconfirmed":"You have to confirm your account before continuing.","not_found_in_database":"Invalid email or password."},"mailer":{"confirmation_instructions":{"landing_page":"Please click on the link that we just sent to your email address. If you do not receive an email from us please first check it is not hiding in your spam folder, if it is not there return to the sign up page and try again.","subject":"Confirmation instructions"},"reset_password_instructions":{"subject":"Reset password instructions"},"unlock_instructions":{"subject":"Unlock Instructions"}},"mandatory":"* Required","omniauth_callbacks":{"failure":"Could not authenticate you from %{kind} because \"%{reason}\".","permission_missing":"You did not grant the required permissions.","success":"Successfully authenticated from %{kind} account."},"password_recovery":{"form":{"labels":{"email":"Email"},"submit":"Reset password"},"headline":"Forgot Password?"},"password_reset":{"email":{"comment":"If you did not request a password reset, just ignore this email.<br/>Your password won\\'t be changed unless you click on the link above and set a new password.","headline":"Welcome %{email}","link":"Change my password","text":"There was a request to change your password, if it was you click the following link - else ignore!"},"form":{"labels":{"password":"New password","password_confirmation":"Repeat password"},"submit":"Reset password"},"headline":"Reset password"},"passwords":{"link":"Forgot password?","send_instructions":"You will receive an email with instructions about how to reset your password in a few minutes.","send_paranoid_instructions":"If your email address exists in our database, you will receive a password recovery link at your email address in a few minutes.","updated":"Your password was changed successfully. You are now signed in.","updated_not_active":"Your password was changed successfully.","no_token":"You can't access this page without coming from a password reset email. If you do come from a password reset email, please make sure you used the full URL provided."},"registrations":{"destroyed":"Bye! Your account was successfully cancelled. We hope to see you again soon.","inactive_signed_up":"You have signed up successfully, but we could not log you in. Reason: \"%{reason}\"","link":"Sign up","reasons":{"inactive":"inactive","locked":"locked","unconfirmed":"unconfirmed"},"signed_up":"Welcome! You have signed up successfully.","updated":"You updated your account successfully.","signed_up_but_inactive":"You have signed up successfully. However, we could not sign you in because your account is not yet activated.","signed_up_but_locked":"You have signed up successfully. However, we could not sign you in because your account is locked.","signed_up_but_unconfirmed":"A message with a confirmation link has been sent to your email address. Please open the link to activate your account.","update_needs_confirmation":"You updated your account successfully, but we need to verify your new email address. Please check your email and click on the confirm link to finalize confirming your new email address."},"sessions":{"inactive":"Your account was not activated yet","invalid":"Invalid email or password.","invalid_token":"Invalid authentication token","link":"Sign in","locked":"Your account is locked","new":{"no_osm_account":"No OpenStreetMap account?","osm_promo_text":"The wheelmap is based on geodata from OpenStreetMap (OSM). OpenStreetMap is a free worldwide map, created by people like you. It's like Wikipedia for maps. To be able to edit places or to create new ones you need an OpenStreetMap account and must to be logged in with it.","promo_text_thank_you":"Thank you very much for your support!","sign_in_with":"Log in with %{kind}","sign_up_with_osm":"Register now.","wheelmap_promo_text":"With your knowledge about wheelchair accessible places you help people with physical impairments to better organize their everyday live. Furthermore the OpenStreetMap gets considerably richer in detail."},"signed_in":"Signed in successfully.","signed_out":"Signed out successfully.","timeout":"Your session expired, please sign in again to continue.","unauthenticated":"You need to sign in or sign up before continuing","unconfirmed":"You need to confirm your account before continuing"},"sign_in":{"form":{"labels":{"email":"Email","password":"Password","remember_me":"Stay logged in?"},"submit":"Log in"},"headline":"Log in"},"sign_out":{"headline":"Log out"},"sign_up":{"email":{"confirm_my_account":"Confirm my account","please_confirm":"You can confirm your account through the link below:","welcome":"Welcome %{email}!"},"form":{"labels":{"email":"Email","password":"Password","password_confirmation":"Repeat password","wants_newsletter":"Yes, keep me up to date about wheelmap - but please not more than once a month."},"submit":"Sign up"},"headline":"Sign up"},"unlocks":{"link":"Didn't receive unlock instructions?","send_instructions":"You will receive an email with instructions about how to unlock your account in a few minutes.","send_paranoid_instructions":"If your account exists, you will receive an email with instructions about how to unlock it in a few minutes.","unlocked":"Your account has been unlocked successfully. Please sign in to continue."}},"poi":{"category":{"accommodation":"Accomodation","education":"Education","food":"Food","government":"Government","health":"Health","leisure":"Leisure","misc":"Misc","money_post":"Bank post","public_transfer":"Public transfer","shopping":"Shopping","sport":"Sport","tourism":"Tourism","unknown":"Unknown"},"name":{"accommodation":{"beach_resort":"Beach hotel","bed_and_breakfast":"Bed and breakfast","camp_site":"Camp site","caravan_site":"Caravan site","chalet":"Chalet","dormitory":"Dormitory","guest_house":"Guest house","hostel":"Hostel","hotel":"Hotel","motel":"Motel"},"education":{"college":"College","driving_school":"Driving school","kindergarten":"Kindergarten","library":"Library","museum":"Museum","school":"School","university":"University"},"food":{"bar":"Bar","biergarten":"Biergarten","cafe":"Cafe","drinking_water":"Drinking water","fast_food":"Fast Food","ice_cream":"Ice cream parlour","pub":"Pub","restaurant":"Restaurant"},"government":{"courthouse":"Courthouse","embassy":"Embassy","government":"Government agency","police":"Police","public_building":"Public building","townhall":"Townhall"},"health":{"dentist":"Dentist","doctors":"Doctors","hearing_aids":"Hearing aid dealer","hospital":"Hospital","medical_supply":"Medical supplies","pharmacy":"Pharmacy","social_facility":"Social facility","veterinary":"Veterinary"},"leisure":{"arena":"Arena","brothel":"Brothel","casino":"Casino","cinema":"Cinema","community_center":"Community Center","gallery":"Gallery","nightclub":"Nightclub","playground":"Playground","sauna":"Sauna","stripclub":"Stripclub","theatre":"Theatre","zoo":"Zoo"},"misc":{"company":"Company (Office)","estate_agent":"Real estate agent","insurance":"Insurance","lawyer":"Lawyer","place_of_worship":"Place of worship","toilets":"Toilets"},"money_post":{"atm":"ATM","bank":"Bank","bureau_de_change":"Bureau de change","post_box":"Post box","post_office":"Post office"},"public_transfer":{"aerodrome":"Airport","bicycle_parking":"Bicycle parking","bicycle_rental":"Bicycle rental","boatyard":"Boatyard","bus_station":"Bus station","bus_stop":"Bus stop","cable_car":"Cable car","car_rental":"Car rental","car_sharing":"Car sharing","chair_lift":"Chair lift","ferry":"Ferry","ferry_terminal":"Ferry terminal","fuel":"Gas station","halt":"Halt","light_rail":"Light rail","parking":"Parking","parking_aisle":"Parking aisle","platform":"Platform","station":"Train station","subway_entrance":"Subway entrance","terminal":"Airport terminal","tram_stop":"Tram stop"},"shopping":{"alcohol":"Liquor","bakery":"Bakery","beauty":"Beauty salon","beverages":"Beverages","bicycle":"Bike shop","books":"Books","butcher":"Butcher","car_repair":"Car repair","car_shop":"Car shop","chemist":"Chemist","clothes":"Clothes","computer":"Computer","confectionery":"Candy store","convenience":"Convenience","deli":"Delicatessen","department_store":"Department store","doityourself":"Do it yourself","dry_cleaning":"Dry cleaning","electronics":"Electronics","fabric":"Fabric shop","farm_shop":"Farm shop","florist":"Florist","furniture":"Furniture","garden_centre":"Garden center","gift":"Gift shop","hairdresser":"Hairdresser","hardware":"Hardware","jewelry":"Jewelry","kiosk":"Kiosk","laundry":"Laundry","mall":"Shopping centre","optician":"Optician","organic":"Organic shop","outdoor":"Outdoor supply","pet":"Pet shop","photo":"Photo","second_hand":"Second hand","shoes":"Shoes","sports":"Sports","stationery":"Stationery","supermarket":"Supermarket","toys":"Toys","travel_agency":"Travel agency","video":"Video rental store"},"sport":{"pitch":"Sports field","sports_centre":"Sports centre","stadium":"Stadium","swimming":"Swimming","swimming_pool":"Swimming pool"},"tourism":{"archaeological_site":"Archaeological site","arts_centre":"Arts centre","artwork":"Artwork","attraction":"Attraction","battlefield":"Battlefield","beach":"Beach","beacon":"Lighthouse","castle":"Castle","cave_entrance":"Cave entrance","information":"Tourist information","memorial":"Memorial","theme_park":"Theme park","tower":"Tower","viewpoint":"View point"},"unknown":{"unknown":"Unknown"}}},"models":{"category":{"prompt":"Choose a category"},"node_type":{"prompt":"Choose a type"},"node":{"info_edit_position":"The location will appear on the Wheelmap as it is shown above. If the marker is not in the correct spot you can <a href=\"%{url}\">change its position on the OpenStreetMap.</a>","mail":{"subject":"[Wheelmap] Problem with %{headline}","body":"(Please only write in English or German.)\n\nHi Sozialhelden,\nsomething is wrong with location: %{url}\n\nThe problem is:"}}},"actions":{"send":"Send","save":"Save","cancel":"Cancel"},"faq":{"answers":{"0":"You can always change the marking of a place yourself. Just choose the right marking and \"Save\" - done!","1":"As a logged in user you can add / correct all the details of a place. Click on \"Edit\" and correct or add information in the mask.","2":"You can add further information (e.g. \"This place has a mobile ramp\") in the comment section. Click on \"Edit\" and \"Add comment\"."},"headline":"Is there a problem with this place?","questions":{"0":"The marking is wrong.","1":"The details of the place are incorrect or missing.","2":"I have more information about this place."}},"header":{"navigation":{"about_wheelmap":"About Wheelmap","choose_language":"Choose language","contact":"Contact","map":"Map","projects":"Projects","blog":"News","feedback":"Feedback","home":"Start","how_to_add_a_place":"How do I add places?","imprint":"Imprint","logged_in_as":"Logged in as:","login":"Log in","logout":"Log out","newsletter":"Newsletter","press":"Press","profile":"Profile","suggestions":"Suggestions","what_is_barrier_free":"What does \"wheelchair accessible\" mean?","what_is_wheelmap":"What is wheelmap?"},"toolbar":{"categories":"Categories"},"meta":{"description":"Find wheelchair accessible places - wheelmap.org","homepage":"Home page","keywords":"wheelchair accessible places find search mark","search":"Search"},"searchbar":{"add_place":"Add another place","find":"Find","placeholder":"Search for a place","title_add_place":"Add a new place at this position now!"},"tagline":"Wheelmap logo","title":"find wheelchair accessible places"},"home":{"index":{"overlay":{"button":"Okay, let\u2019s go!","categories":"Filter places by categories","filter":"Filter places by wheelchair accessibility","headline":"Mark and find wheelchair accessible places with Wheelmap.org - worldwide and for free. It\u2019s easy:","lookup":"Search for a specific place","secondary_headline":"Our traffic light system to mark the wheelchair accessibility of public places:"},"filter":{"category":"Choose category","deselect_all":"Deselect all","select_all":"Select all","wheelchair":"Wheelchair accessible?"},"ie":{"action":{"ignore":"Ignore","upgrade":"Update Browser"},"warning":{"headline":"We apologise!","message":"You appear to use Internet Explorer. Wheelmap requires a standard-compliant browser to work properly. Please consider using Firefox, Chrome, Safari or Opera."}},"link":{"node":{"create":"Add new place"}},"popup":{"form":{"limited":"partially wheelchair accessible","no":"not wheelchair accessible","save":"Update","unknown":"unknown status","yes":"wheelchair accessible"},"help":"Wheelchair accessible? (Help)","more":"more ..."}}},"nodes":{"new":{"form":{"legend":"Location of the place","location":"Please click on the map and place the marker at the exact position."},"header":{"title":"New place | wheelmap.org"},"link":{"large_map":"&laquo; Cancel"}},"node_data":{"address":"Address:","contact_details":"Contact details:"},"node_edit":{"details":"Details","edit":"Edit"},"node_map":{"map":"Map:"},"node_note":{"comment":"Comment:"},"node_photos":{"add":"Add","photos_of_this_place":"Photos of this place:","upload":"Upload"},"node_similar":{"similar":"Similar places: %{name}"},"node_status":{"accessible_toilet":"Wheelchair accessible toilet:","premium":"%{name} says: this place is","wheelchair_accessibility":"Wheelchair accessibility:"},"node_streetview":{"streetview":"Streetview:"},"show":{"header":{"meta":{"description":"Find out if this place is wheelchair accessible on Wheelmap.org. Or add further information and photos to the place.","title":"This place is on Wheelmap.org: %{name}"},"title":"Place: %{node} | wheelmap.org"},"share":{"email":"E-mail","facebook":"Facebook","text":"I've found this place on Wheelmap.org: %{name}","twitter":"Twitter"},"link":{"back":"back","large_map":"Enlarge","listing":"All places of typ '%{type}' in %{city}","upload":"Upload image"},"more_data_from":"There is more data for this place, checked by:","show-in-osm":"OpenStreetMap"},"create":{"flash":{"not_successfull":"Oops, your input was either incorrect or incomplete","successfull":"Thank you, your submission was saved successfully and will be online shortly."}},"edit":{"header":{"title":"Edit place: %{node} | wheelmap.org"},"link":{"large_map":"&laquo; Cancel"}},"errors":{"default":"Oops somethin went wrong. We have been informed about this issue","not_authorized":"Sorry, authentication failed","not_available":"Sorry, this page is temporarily not available.","not_existent":"Sorry, this place is not available anymore.","not_found":"Sorry, page not found.","param_missing":"Please provide a search term"},"flash":{"authorize_wheelmap":"You need an OpenStreetMap account to modify data"},"node":{"link":{"claim":"Do you work here?","edit_node":"Edit place","report_bug":"Report a problem"}},"update":{"flash":{"not_successfull":"Oops, your input was either incorrect or incomplete","successfull":"Thank you, your submission was saved successfully and will be online shortly."}},"update_wheelchair":{"successfull":"The status for \"%{name}\" has been changed to \"%{status}\" and will be online shortly."}},"search":{"index":{"no-results":{"headline":"Sorry, we couldn\u2019t find a place called \"%{query}\".","hint":{"example":"<strong>Example:</strong> London, United Kingdom","info":"Our search service only works with name and/or address information. Hence, please either search for the name of the place or an address, e.g. street name and/or city. Searching for a type of place, e.g. restaurant or cinema, does not work!","work_in_progress":"We work hard to make searching for places easier and more intuitive in the future."},"try_this":{"address":"Please provide more <strong>address details</strong>.","intro":"Try this:","spell_check":"Check the <strong>spelling</strong> of your input."}},"results":{"ticker":{"one":"%{count} result:","other":"%{count} results:"}},"search":{"for":"Searching for \"%{q}\"","not_found":"No places could be found!"}},"timeout":{"headline":"Oh, our fault","info":"Our search service was temporarily not available.","repeat_search":"Retry search"}},"application":{"require_no_user":{"notice":"You\u2019re already logged in\u2026"},"require_user":{"notice":"You must be logged in to see this page."}},"breadcrumbs":{"node":{"create":"Add new place","edit":"Edit place"},"root":"wheelmap"},"common":{"close":"close","skip":"skip"},"form":{"show_fully_accessible_places":"Wheelchair accessible","show_limited_accessible_places":"partly wheelchair accessible","show_places_without_status":"unknown status","show_unaccessible_places":"not wheelchair accessible"},"formtastic":{"hints":{"email":"We treat your address confidentially, no spam. Promise!","lat":"Move the marker on the map to the correct position","osm_username":"Not a member yet? <a href=\"http://openstreetmap.org/user/new\" target=\"_blank\">Create an OpenStreetMap account now</a>","password":"(leave empty if you don't want to change it)","phone":"For example: +49 30 123456-78","website":"For example: http://www.example.com"},"labels":{"category":"Category:","centralkey":"Central key:","city":"City:","create":"Create place","email":"E-Mail","finish":"Finish","housenumber":"No:","lat":"Latitude","lon":"Longitude","name":"Name:","osm_password":"OSM password","osm_username":"OSM account name","password":"Password","password_confirmation":"Repeat password","phone":"Telephone:","postcode":"Post code:","privacy_policy":"I accept paragraphs 1 and 2 of the data privacy agreement.","reset":"Reset","save":"Save","street":"Street:","terms":"I accept the terms of use.","type":"Type:","website":"Website:","wheelchair":"Wheelchair accessibility?","wheelchair_description":"Accessibility comment:"},"titles":{"basic":"Basic data","optional":"More information <span class=\"addition\">(all fields are optional)</span>"}},"global":{"form_validation_error":"Please note the errors listed below"},"how?":"How?","landing_pages":{"index":{"wheelchair":{"limit":{"headline":"All limited wheelchair accessible %{type} in %{city} (%{count})"},"no":{"headline":"All non-wheelchair accessible %{type} in %{city} (%{count})"},"unknown":{"headline":"All %{type} in %{city} with unknown wheelchair status (%{count})"},"yes":{"headline":"All wheelchair accessible %{type} in %{city} (%{count})"}}}},"layouts":{"application":{"banner":{"alt":"A project by Sozialhelden.de"}}},"node":{"address":{"city":"%{city} %{postcode}","street":"%{housenumber} %{street}"},"tags":{"phone":"Phone:","website":"Website:"}},"oauth":{"application":{"connect":{"headline":"You need to connect your account with your 'open street map' account before you can create or modify places on wheelmap.org."}},"callback":{"notice":"Your wheelmap account is now connected to the OpenStreetMap account %{user}."}},"or":"or","place":{"one":"%{count} place","other":"%{count} places"},"profile":{"edit":{"application":{"oauth":{"connected":"Status: connected","grant":"Connect now","not_connected":"Status: Not connected","revoke":"Disconnect"}},"headline":"Edit your profile"}},"splash":{"countline":"%{count} places have already been marked.","headline":"Everyone can add wheelchair accessible places!","start":"Start","step1":"Click on a place you know","step2":"Mark it and click save","step3":"That's it! No registration necessary","what_is_wheelmap":"What is wheelmap?"},"statistics":"Statistics","user_sessions":{"create":{"activation":{"notice":"Your account is activated now!"},"error":{"notice":"Email and password don't match."},"notice":"You're in!"},"destroy":{"notice":"Bye, come back soon!"},"new":{"email":"E-mail address","login":"Log in","login_with_twitter":"Log in with Twitter","password":"Password","remember_me":"Stay logged in"}},"users":{"after_signup_edit":{"welcome":{"headline":"You're almost there! Finish the sign up for your Wheelmap account here:","set_password_for_mobile":"You've completed your registration with OpenStreetMap.\nNow choose an email address and password for your Wheelmap account and then you're all set! You need this email address and password to log in the Wheelmap app for iPhone or Android. ","text":"How can we get in touch with you? You can change this information later in your profile."}},"edit":{"headline":{"your_images":"Your uploaded images"}}},"wheelchairstatus":{"limited":"partially wheelchair accessible","no":"not wheelchair accessible","unknown":"unknown status","yes":"wheelchair accessible"},"wheelmap":{"footer":{"a_project_of":"A project by","based_on":"Based on","become_a_supporter":"Become a supporter","main_supporter":"Main supporter"},"itunes":{"alt":"AppStore Logo","title":"Download the iPhone App now!"},"logo":{"alt":"Wheelmap Logo - find wheelchair accessible places","title":"Wheelmap - find wheelchair accessible places"},"what_is":{"fully_accessible":"Entrance without steps, all rooms without steps, accessible toilet if customary in a place","limited_accessible":"Entry has a step (max. height 7cm), most rooms are without steps, toilet is not accessible","not_accessible":"Entry has steep or several steps, rooms are not accessible","unknown_accessible":"Help by marking places!"}},"will_paginate":{"next_label":"Next &#8594;","page_entries_info":{"multi_page":"Displaying %{model} %{from} - %{to} of %{count} in total","multi_page_html":"Displaying %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b> of <b>%{count}</b> in total","single_page":{"one":"Displaying 1 %{model}","other":"Displaying all %{count} %{model}","zero":"No %{model} found"},"single_page_html":{"one":"Displaying <b>1</b> %{model}","other":"Displaying <b>all&nbsp;%{count}</b> %{model}","zero":"No %{model} found"}},"page_gap":"&hellip;","previous_label":"&#8592; Previous"},"views":{"pagination":{"first":"&laquo; First","last":"Last &raquo;","previous":"&lsaquo; Prev","next":"Next &rsaquo;","truncate":"&hellip;"}},"apipie":{"resources":"Resources","resource":"Resource","description":"Description","no_docs_found":"No documentation found","no_docs_found_descr":"We have not found any documentation for your API.","follow_instructions_html":"Follow %{href} on how to describe your controllers.","follow_instructions_href":"further instructions","oops":"Oops!!","resource_not_found_html":"Resource %{res} not found.","method_not_found_html":"Method %{method} not found for resource %{resource}.","goto_homepage_html":"Try going to %{href}","goto_homepage_href":"%{app_name} API documentation homepage","required":"required","optional":"optional","nil_allowed":"nil allowed","param_name":"Param name","params":"Params","examples":"Examples","metadata":"Metadata","errors":"Errors","supported_formats":"Supported Formats","enable_javascript_html":"Please enable JavaScript to view the %{comments_href}.","comments_powered_by_disqus":"comments powered by %{disqus}","api_documentation":"API documentation"}};
