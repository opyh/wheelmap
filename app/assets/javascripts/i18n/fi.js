I18n.translations || (I18n.translations = {});
I18n.translations["fi"] = I18n.extend((I18n.translations["fi"] || {}), {
  "actions": {
    "cancel": "Peruuta",
    "next": "Seuraava",
    "save": "Tallenna",
    "send": "Lähetä"
  },
  "active_admin": {
    "access_denied": {
      "message": "Sinulla ei ole oikeuksia suorittaa yrittämääsi toimintoa."
    },
    "any": "mikä vain",
    "batch_actions": {
      "action_label": "%{title} Valittu",
      "button_label": "Toimet",
      "default_confirmation": "Oletko varma, että haluat tehdä tämän?",
      "delete_confirmation": "Oletko varma, että haluat poistaa nämä %{plural_model}:t?",
      "labels": {
        "destroy": "Poista"
      },
      "link": "Luo",
      "selection_toggle_explanation": "(Vaihda valintaa)",
      "succesfully_destroyed": {
        "one": "1 %{model} poistettu",
        "other": "%{count} %{plural_model}:a poistettu"
      }
    },
    "blank_slate": {
      "content": "Järjestelmässä ei ole yhtään %{resource_name}:ia vielä.",
      "link": "Luo ensimmäinen"
    },
    "cancel": "Peruuta",
    "clear_filters": "Clear Filters",
    "comments": {
      "add": "Lisää kommentti",
      "author": "Luoja",
      "author_missing": "Anonymous",
      "author_type": "Luoja-tyyppi",
      "body": "Runko",
      "created_at": "Created",
      "delete": "Delete Comment",
      "delete_confirmation": "Are you sure you want to delete these comment?",
      "errors": {
        "empty_text": "Kommenttia ei pystytty tallentamaan, et kirjoittanut kommenttitekstiä."
      },
      "no_comments_yet": "Ei kommentteja.",
      "resource": "Resurssi",
      "resource_type": "Resurssityyppi",
      "title": "Kommentti",
      "title_content": "Kommentteja (%{count})"
    },
    "create_model": "New %{model}",
    "dashboard": "Etusivu",
    "dashboard_welcome": {
      "call_to_action": "Lisätäksesi etusivun osioita katso: 'app/admin/dashboard.rb'",
      "welcome": "Tervetuloa! Tämä on Active Adminin oletusetusivu."
    },
    "delete": "Poista",
    "delete_confirmation": "Oletko varma, että haluat poistaa tämän?",
    "delete_model": "Poista %{model}",
    "details": "%{model} Tiedot",
    "devise": {
      "change_password": {
        "submit": "Vaihda salasana",
        "title": "Vaihda salasana"
      },
      "email": {
        "title": "Sähköposti"
      },
      "links": {
        "forgot_your_password": "Unohtunut salasana?",
        "resend_confirmation_instructions": "Resend confirmation instructions",
        "resend_unlock_instructions": "Resend unlock instructions",
        "sign_in": "Kirjaudu sisään",
        "sign_in_with_omniauth_provider": "Kirjaudu sisään %{provider}:ia käyttäen",
        "sign_up": "Sign up"
      },
      "login": {
        "remember_me": "Muista minut",
        "submit": "Kirjaudu sisään",
        "title": "Sisäänkirjautuminen"
      },
      "password": {
        "title": "Salasana"
      },
      "resend_confirmation_instructions": {
        "submit": "Resend confirmation instructions",
        "title": "Resend confirmation instructions"
      },
      "reset_password": {
        "submit": "Resetoi salasana",
        "title": "Unohtunut salasana?"
      },
      "sign_up": {
        "submit": "Sign up",
        "title": "Sign up"
      },
      "subdomain": {
        "title": "Subdomain"
      },
      "unlock": {
        "submit": "Lähetä ohjeet lukituksen poistoon",
        "title": "Lähetä ohjeet lukituksen poistoon"
      },
      "username": {
        "title": "Käyttäjänimi"
      }
    },
    "download": "Lataa:",
    "dropdown_actions": {
      "button_label": "Acciones"
    },
    "edit": "Muokkaa",
    "edit_model": "Muokaa %{model}",
    "empty": "Tyhjä",
    "equal_to": "Equal To",
    "filter": "Filter",
    "filters": {
      "buttons": {
        "clear": "Tyhjennä valinnat",
        "filter": "Hae"
      },
      "predicates": {
        "contains": "Sisältää",
        "ends_with": "Päättyy",
        "equals": "On yhtä kuin",
        "greater_than": "Suurempi kuin",
        "less_than": "Pienempi kuin",
        "starts_with": "Alkaa"
      }
    },
    "greater_than": "Greater Than",
    "has_many_delete": "Poista",
    "has_many_new": "Lisää uusi %{model}",
    "has_many_remove": "Poista",
    "index_list": {
      "block": "Lista",
      "blog": "Blogi",
      "grid": "Ruudukko",
      "table": "Taulukko"
    },
    "less_than": "Less Than",
    "logout": "Kirjaudu ulos",
    "main_content": "Ole hyvä, käytä %{model}#main_content:ia nähdäksesi jotain.",
    "new_model": "Uusi %{model}",
    "next": "Seuraava",
    "pagination": {
      "empty": "%{model}:ia ei löytynyt",
      "entry": {
        "one": "syöte",
        "other": "syötteet"
      },
      "multiple": "Näytetään %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b> (yhteensä <b>%{total}</b>)",
      "multiple_without_total": "Näytetään %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b>",
      "one": "Näytetään <b>1</b> %{model}",
      "one_page": "Näytetään <b>kaikki %{n}</b> %{model}:it"
    },
    "powered_by": "Käyttää %{active_admin} %{version}:ia",
    "previous": "Edellinen",
    "search_field": "Search %{field}",
    "search_status": {
      "current_filters": "Current filters:",
      "headline": "Scope:",
      "no_current_filters": "None"
    },
    "sidebars": {
      "filters": "Haku",
      "search_status": "Search Status"
    },
    "status_tag": {
      "no": "Ei",
      "yes": "Kyllä"
    },
    "unsupported_browser": {
      "headline": "Please note that ActiveAdmin no longer supports Internet Explorer versions 8 or less.",
      "recommendation": "We recommend upgrading to the latest <a href=\"http://windows.microsoft.com/ie\">Internet Explorer</a>, <a href=\"https://chrome.google.com/\">Google Chrome</a>, or <a href=\"https://mozilla.org/firefox/\">Firefox</a>.",
      "turn_off_compatibility_view": "If you are using IE 9 or later, make sure you <a href=\"http://windows.microsoft.com/en-US/windows7/webpages-look-incorrect-in-Internet-Explorer\">turn off \"Compatibility View\"</a>."
    },
    "update_model": "Edit %{model}",
    "view": "Katso"
  },
  "activerecord": {
    "attributes": {
      "poi": {
        "address": "Osoite",
        "address_city": "Kaupunki",
        "address_housenumber": "Talon numero",
        "address_postcode": "Postinumero",
        "address_street": "Katu",
        "name": "Nimi",
        "note": "Note",
        "phone": "Puhelin",
        "type": "Type",
        "website": "Nettisivu"
      },
      "user": {
        "first_name": "Given name",
        "last_name": "Last name",
        "privacy_policy": "Privacy policy",
        "terms": "Terms"
      }
    },
    "errors": {
      "full_messages": {
        "format": "%{attribute} %{message}"
      },
      "messages": {
        "accepted": "must be accepted",
        "blank": "can't be blank",
        "confirmation": "doesn't match confirmation",
        "empty": "can't be empty",
        "equal_to": "must be equal to %{count}",
        "even": "must be even",
        "exclusion": "is reserved",
        "greater_than": "must be greater than %{count}",
        "greater_than_or_equal_to": "must be greater than or equal to %{count}",
        "inclusion": "is not included in the list",
        "invalid": "is invalid",
        "less_than": "must be less than %{count}",
        "less_than_or_equal_to": "must be less than or equal to %{count}",
        "not_a_number": "is not a number",
        "not_equal_to": "must not be equal to %{count}",
        "odd": "must be odd",
        "record_invalid": "Validation failed: %{errors}",
        "restrict_dependent_destroy": {
          "many": "Cannot delete record because dependent %{record} exist",
          "one": "Cannot delete record because a dependent %{record} exists"
        },
        "taken": "has already been taken",
        "too_long": "is too long (maximum is %{count} characters)",
        "too_short": "is too short (minimum is %{count} characters)",
        "wrong_length": "is the wrong length (should be %{count} characters)"
      },
      "models": {
        "user": {
          "attributes": {
            "email": {
              "blank": "can't be blank if password is given"
            },
            "privacy_policy": {
              "accepted": "must be accepted"
            },
            "terms": {
              "accepted": "must be accepted"
            }
          }
        },
        "user_session": {
          "email": "Email address",
          "password": "Password",
          "remember_me": "Stay logged in"
        }
      },
      "template": {
        "body": "There were problems with the following fields:",
        "header": {
          "one": "1 error prohibited this %{model} from being saved",
          "other": "%{count} errors prohibited this %{model} from being saved"
        }
      }
    },
    "models": {
      "user": "User"
    }
  },
  "apipie": {
    "api_documentation": "API documentation",
    "comments_powered_by_disqus": "comments powered by %{disqus}",
    "description": "Description",
    "enable_javascript_html": "Please enable JavaScript to view the %{comments_href}.",
    "error_code": "Code",
    "error_description": "Description",
    "error_metadata": "Metadata",
    "errors": "Errors",
    "examples": "Examples",
    "follow_instructions_href": "further instructions",
    "follow_instructions_html": "Follow %{href} on how to describe your controllers.",
    "goto_homepage_href": "%{app_name} API documentation homepage",
    "goto_homepage_html": "Try going to %{href}",
    "header_name": "Header name",
    "headers": "Headers",
    "metadata": "Metadata",
    "method_not_found_html": "Method %{method} not found for resource %{resource}.",
    "nil_allowed": "nil allowed",
    "no_docs_found": "No documentation found",
    "no_docs_found_descr": "We have not found any documentation for your API.",
    "oops": "Oops!!",
    "optional": "optional",
    "param_name": "Param name",
    "params": "Params",
    "required": "required",
    "resource": "Resource",
    "resource_not_found_html": "Resource %{resource} not found.",
    "resources": "Resources",
    "supported_formats": "Supported Formats"
  },
  "application": {
    "require_no_user": {
      "notice": "You’re already logged in…"
    },
    "require_user": {
      "notice": "You must be logged in to see this page."
    }
  },
  "breadcrumbs": {
    "node": {
      "create": "Lisää uusi paikka",
      "edit": "Edit place"
    },
    "root": "Wheelmap"
  },
  "common": {
    "close": "Sulje",
    "skip": "skip"
  },
  "community_support_form": {
    "new": {
      "form": {
        "describe": "Please write to us in English or German.",
        "flash_after_submit": "Thank you for contacting us. Our support team will get back to you as soon as possible.",
        "header_text_html": "Please check the <a href=\"https://news.wheelmap.org/en/faq/\">frequently asked questions</a> for help first. If the solution to your problem is not there, please answer the following questions so we can fix it.",
        "note": "Note that Wheelmap is an open-source project run by a non-profit organization and we have limited resources for the app development.",
        "questions": {
          "a": "What did you do?",
          "b": "What did you expect would happen?",
          "c": "What happened instead?"
        },
        "submit_button": "Submit",
        "title": "Ilmoita viasta"
      }
    }
  },
  "date": {
    "abbr_day_names": [
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat"
    ],
    "abbr_month_names": [
      "",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    "day_names": [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "formats": {
      "default": "%Y-%m-%d",
      "long": "%B %d, %Y",
      "short": "%b %d"
    },
    "month_names": [
      "",
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ],
    "order": [
      "year",
      "month",
      "day"
    ]
  },
  "datetime": {
    "distance_in_words": {
      "about_x_hours": {
        "one": "about 1 hour",
        "other": "about %{count} hours"
      },
      "about_x_months": {
        "one": "about 1 month",
        "other": "about %{count} months"
      },
      "about_x_years": {
        "one": "about 1 year",
        "other": "about %{count} years"
      },
      "almost_x_years": {
        "one": "almost 1 year",
        "other": "almost %{count} years"
      },
      "half_a_minute": "half a minute",
      "less_than_x_minutes": {
        "one": "less than a minute",
        "other": "less than %{count} minutes"
      },
      "less_than_x_seconds": {
        "one": "less than 1 second",
        "other": "less than %{count} seconds"
      },
      "over_x_years": {
        "one": "over 1 year",
        "other": "over %{count} years"
      },
      "x_days": {
        "one": "1 day",
        "other": "%{count} days"
      },
      "x_minutes": {
        "one": "1 minute",
        "other": "%{count} minutes"
      },
      "x_months": {
        "one": "1 month",
        "other": "%{count} months"
      },
      "x_seconds": {
        "one": "1 second",
        "other": "%{count} seconds"
      }
    },
    "prompts": {
      "day": "Day",
      "hour": "Hour",
      "minute": "Minute",
      "month": "Month",
      "second": "Seconds",
      "year": "Year"
    }
  },
  "devise": {
    "confirmations": {
      "confirmed": "Your email address was successfully confirmed.",
      "link": "You didn't receive confirmation instructions?",
      "send_instructions": "In a few minutes you will receive an email with a link to confirm your email address.",
      "send_paranoid_instructions": "If your account exists, you will receive an email in a few minutes with instructions on how to confirm your account."
    },
    "destroy": {
      "confirm": "Are you sure?",
      "headline": "Delete account",
      "link": "Delete now"
    },
    "edit": {
      "form": {
        "labels": {
          "current_password": "Current password <i>(we need it to confirm your changes)</i>",
          "email": "Sähköposti",
          "password": "Password <i>(leave empty if you don\\'t want to change it)</i>",
          "password_confirmation": "Repeat password"
        },
        "submit": "Tallenna muutokset"
      },
      "headline": "Edit account"
    },
    "failure": {
      "already_authenticated": "You are already signed in.",
      "inactive": "Your account has not been activated yet.",
      "invalid": "Invalid email or password.",
      "invalid_token": "Invalid authentication token",
      "last_attempt": "You have one more attempt before your account will be locked.",
      "locked": "Your account is locked",
      "not_found_in_database": "Invalid email or password.",
      "timeout": "Your session has expired, please sign in again to continue.",
      "unauthenticated": "You need to sign in or sign up before continuing",
      "unconfirmed": "You need to confirm your account before continuing."
    },
    "mailer": {
      "confirmation_instructions": {
        "landing_page": "Please click on the link that we just sent to your email address. If you do not receive an email from us, please first check if it is not hiding in your spam folder. If it is not there return to the sign up page and try again.",
        "subject": "One more step to activate your account"
      },
      "reset_password_instructions": {
        "subject": "Reset password instructions"
      },
      "unlock_instructions": {
        "subject": "Unlock instructions"
      }
    },
    "mandatory": "* Required",
    "omniauth_callbacks": {
      "failure": "Authorization with %{kind} failed. Error: \"%{reason}\". ",
      "permission_missing": "You did not grant the required permission.",
      "success": "Successfully logged in with %{kind}."
    },
    "password_recovery": {
      "form": {
        "labels": {
          "email": "Sähköposti"
        },
        "submit": "Reset password"
      },
      "headline": "Unohditko salasanasi?"
    },
    "password_reset": {
      "email": {
        "comment": "If you did not request a password reset, just ignore this email.<br/>Your password won\\'t be changed unless you click on the link above and set a new password.",
        "headline": "Welcome %{email}",
        "link": "Change my password",
        "text": "We received a request to change your password. If you sent the request, click the following link - otherwise ignore this!"
      },
      "form": {
        "labels": {
          "password": "New password",
          "password_confirmation": "Repeat password"
        },
        "submit": "Reset password"
      },
      "headline": "Reset password"
    },
    "passwords": {
      "link": "Unohditko salasanasi?",
      "no_token": "You can't access this page without coming from a password reset email. If you do come from a password reset email, please make sure you used the full URL provided.",
      "send_instructions": "You will receive an email with instructions on how to reset your password in a few minutes",
      "send_paranoid_instructions": "If your account exists, you will receive an email in a few minutes with instructions on how to reset your password",
      "updated": "Your password was changed successfully, you are now logged in",
      "updated_not_active": "Your password was changed successfully"
    },
    "registrations": {
      "destroyed": "Bye! Your account was successfully cancelled. We hope to see you again soon.",
      "inactive_signed_up": "You have signed up successfully, but we could not log you in. Reason: \"%{reason}\"",
      "link": "Luo tunnus",
      "reasons": {
        "inactive": "inactive",
        "locked": "locked",
        "unconfirmed": "unconfirmed"
      },
      "signed_up": "You have signed up successfully. A you have been sent a confirmation email.",
      "signed_up_but_inactive": "You have signed up successfully. However, we could not sign you in because your account is not yet activated.",
      "signed_up_but_locked": "You have signed up successfully. However, we could not sign you in because your account is locked.",
      "signed_up_but_unconfirmed": "A message with a confirmation link has been sent to your email address. Please open the link to activate your account.",
      "update_needs_confirmation": "You updated your account successfully, but we need to verify your new email address. Please check your email and click on the confirm link to finalize confirming your new email address.",
      "updated": "You have updated your account successfully."
    },
    "sessions": {
      "inactive": "Your account has not been activated yet",
      "invalid": "Invalid email or password.",
      "invalid_token": "Invalid authentication token",
      "link": "Kirjaudu sisään",
      "locked": "Your account is locked",
      "new": {
        "no_osm_account": "No OpenStreetMap account?",
        "osm_promo_text": "The Wheelmap is based on geodata from OpenStreetMap (OSM). OpenStreetMap is a free worldwide map, created by people like you. It's like Wikipedia for maps. To be able to edit places or to create new ones you need an OpenStreetMap account and must be logged in with it.",
        "promo_text_thank_you": "Thank you very much for your support!",
        "sign_in_with": "Log in with %{kind}",
        "sign_up_with_osm": "Register now.",
        "wheelmap_promo_text": "With your knowledge about wheelchair accessible places you can help people with physical impairments to plan their daily lives better. Furthermore, this will help make OpenStreetMap more detailed."
      },
      "signed_in": "Logged in successfully",
      "signed_out": "You have signed out successfully",
      "timeout": "Your session has expired, please sign in again to continue.",
      "unauthenticated": "You need to sign in or sign up before continuing",
      "unconfirmed": "You need to confirm your account before continuing"
    },
    "sign_in": {
      "form": {
        "labels": {
          "email": "Sähköposti",
          "password": "Salasana",
          "remember_me": "Stay logged in?"
        },
        "submit": "Log in"
      },
      "headline": "Log in"
    },
    "sign_out": {
      "headline": "Log out"
    },
    "sign_up": {
      "email": {
        "confirm_my_account": "Confirm my account",
        "please_confirm": "You can confirm your account through the link below:",
        "welcome": "Welcome %{email}!"
      },
      "form": {
        "labels": {
          "email": "Sähköposti",
          "password": "Salasana",
          "password_confirmation": "Repeat password",
          "wants_newsletter": "Yes, keep me up to date about Wheelmap - but please not more than once a month."
        },
        "submit": "Luo tunnus"
      },
      "headline": "Luo tunnus"
    },
    "unlocks": {
      "link": "You didn't receive unlock instructions?",
      "send_instructions": "You will receive an email in a few minutes with instructions on how to unlock your account",
      "send_paranoid_instructions": "If your account exists, you will receive an email in a few minutes with instructions on how to unlock your account",
      "unlocked": "Your account was successfully unlocked. You are now signed in."
    }
  },
  "errors": {
    "dynamic_format": "%{message}",
    "format": "%{attribute} %{message}",
    "messages": {
      "accepted": "must be accepted",
      "already_confirmed": "has already been confirmed",
      "blank": "must be filled in",
      "carrierwave_download_error": "could not be downloaded",
      "carrierwave_integrity_error": "is not of an allowed file type",
      "carrierwave_processing_error": "failed to be processed",
      "confirmation": "doesn't match confirmation",
      "confirmation_period_expired": "needs to be confirmed within %{period}, please request a new one",
      "empty": "must be filled in",
      "equal_to": "must be exactly %{count}",
      "even": "must be an even number",
      "exclusion": "is reserved",
      "expired": "expired, please request a new one",
      "extension_black_list_error": "You are not allowed to upload %{extension} files, prohibited types: %{prohibited_types}",
      "extension_white_list_error": "You are not allowed to upload %{extension} files, allowed types: %{allowed_types}",
      "greater_than": "must be greater than %{count}",
      "greater_than_or_equal_to": "must be greater than or equal to %{count}",
      "inclusion": "not a valid value",
      "invalid": "not valid",
      "less_than": "must be less than %{count}",
      "less_than_or_equal_to": "must be less than or equal to %{count}",
      "mime_types_processing_error": "Failed to process file with MIME::Types, maybe not valid content-type? Original Error: %{e}",
      "mini_magick_processing_error": "Failed to manipulate with MiniMagick, maybe it is not an image? Original Error: %{e}",
      "not_a_number": "is not a number",
      "not_an_integer": "must be an integer",
      "not_found": "was not found",
      "not_locked": "was not locked",
      "not_saved": {
        "one": "An error prohibited to save a %{resource}:",
        "other": "%{count} errors prohibited to save a %{resource}:"
      },
      "odd": "must be an odd number",
      "other_than": "must be other than %{count}",
      "present": "must be blank",
      "rmagick_processing_error": "Failed to manipulate with rmagick, maybe it is not an image? Original Error: %{e}",
      "taken": "has already been taken",
      "too_long": "is too long (not more than %{count} characters)",
      "too_short": "is too short (not less than %{count} characters)",
      "wrong_length": "is the wrong length (should be %{count} characters)"
    },
    "models": {
      "node": {
        "website": {
          "invalid": "Website address is not valid."
        }
      }
    },
    "template": {
      "body": "There were problems with the following fields:",
      "header": {
        "one": "1 error prohibited this %{model} from being saved",
        "other": "%{count} errors prohibited this %{model} from being saved"
      }
    }
  },
  "faq": {
    "answers": {
      "0": "You can always change the marking of a place yourself. Just choose the right marking and \"Save\" - done!",
      "1": "As a logged in user you can add / correct all the details of a place. Click on \"Edit\" and correct or add information in the mask.",
      "2": "You can add further information (e.g. \"This place has a mobile ramp\") in the comment section. Click on \"Edit\" and \"Add comment\"."
    },
    "headline": "Is there a problem with this place?",
    "questions": {
      "0": "The marking is wrong.",
      "1": "The details of the place are incorrect or missing.",
      "2": "I have more information about this place."
    }
  },
  "flash": {
    "actions": {
      "create": {
        "notice": "%{resource_name} was successfully created"
      },
      "destroy": {
        "alert": "%{resource_name} could not be removed",
        "notice": "%{resource_name} was successfully deleted"
      },
      "update": {
        "notice": "%{resource_name} was successfully updated"
      }
    },
    "photos": {
      "destroy": {
        "notice": "Image was successfully deleted"
      }
    }
  },
  "form": {
    "show_fully_accessible_places": "Wheelchair accessible",
    "show_limited_accessible_places": "Osittain esteetön pääsy pyörätuolilla ",
    "show_places_without_status": "Tuntematon status",
    "show_unaccessible_places": "Ei saavutettavissa pyörätuolilla"
  },
  "formtastic": {
    "hints": {
      "email": "We treat your address confidentially. We promise not to send you spam!",
      "lat": "Move the marker on the map to the correct position",
      "osm_username": "Not a member yet? <a href=\"http://openstreetmap.org/user/new\" target=\"_blank\">Create an OpenStreetMap account now</a>",
      "password": "(leave empty if you don't want to change it)",
      "phone": "For example: +49 30 12345678",
      "website": "For example: http://www.example.com"
    },
    "labels": {
      "category": "Category:",
      "centralkey": "Central key:",
      "city": "Kaupunki",
      "create": "Create a place",
      "email": "Sähköposti",
      "finish": "Finish",
      "housenumber": "No:",
      "lat": "Latitude",
      "lon": "Longitude",
      "name": "Name:",
      "osm_password": "OpenStreetMap password",
      "osm_username": "OpenStreetMap account name",
      "password": "Salasana",
      "password_confirmation": "Repeat password",
      "phone": "Telephone:",
      "postcode": "Post code:",
      "privacy_policy": "Hyväksyn tietosuojasopimuksen pykälät 1 ja 2.",
      "reset": "Reset",
      "save": "Tallenna",
      "street": "Katu:",
      "terms": "Hyväksyn käyttöehdot",
      "type": "Type:",
      "website": "Website:",
      "wheelchair": "Wheelchair accessibility?",
      "wheelchair_description": "Accessibility comment:",
      "wheelchair_toilet": "Wheelchair accessible toilet:"
    },
    "titles": {
      "basic": "Basic data",
      "optional": "More information <span class=\"addition\">(all fields are optional)</span>"
    }
  },
  "global": {
    "form_validation_error": "Please note the errors listed below"
  },
  "header": {
    "meta": {
      "description": "Wheelmap.org is an online map to search, find and mark wheelchair-accessible places. Get involved by marking public places like bars, restaurants, cinemas or supermarkets!",
      "homepage": "Home page",
      "keywords": "wheelchair accessible places find search mark",
      "search": "Haku",
      "title": "Wheelmap.org"
    },
    "navigation": {
      "about_wheelmap": "About Wheelmap",
      "blog": "News",
      "choose_language": "Choose language",
      "contact": "Contact",
      "feedback": "Feedback",
      "home": "Start",
      "how_to_add_a_place": "How do I add places?",
      "imprint": "Imprint",
      "logged_in_as": "Logged in as:",
      "login": "Log in",
      "logout": "Log out",
      "map": "Kartta",
      "newsletter": "Newsletter",
      "press": "Press",
      "profile": "Profile",
      "projects": "Osallistu",
      "report_problem": "Ilmoita viasta",
      "suggestions": "Suggestions",
      "what_is_barrier_free": "What does \"wheelchair accessible\" mean?",
      "what_is_wheelmap": "What is Wheelmap?"
    },
    "searchbar": {
      "add_place": "Add another place",
      "find": "Find",
      "placeholder": "Search for a place",
      "title_add_place": "Add a new place at this position now!"
    },
    "tagline": "Wheelmap logo",
    "title": "Find wheelchair accessible places",
    "toolbar": {
      "categories": "Categories"
    }
  },
  "helpers": {
    "page_entries_info": {
      "more_pages": {
        "display_entries": "Displaying %{entry_name} <b>%{first}&nbsp;-&nbsp;%{last}</b> of <b>%{total}</b> in total"
      },
      "one_page": {
        "display_entries": {
          "one": "Näytetään <b>yksi</b> %{entry_name}",
          "other": "Näytetään <b>%{count}</b> %{entry_name}",
          "zero": "No %{entry_name} found"
        }
      }
    },
    "select": {
      "prompt": "Please choose"
    },
    "submit": {
      "create": "create %{model}",
      "submit": "save %{model}",
      "update": "update %{model}"
    }
  },
  "home": {
    "index": {
      "embed_link": "Show on Wheelmap.org",
      "filter": {
        "category": "Choose category",
        "deselect_all": "Deselect all",
        "select_all": "Select all",
        "wheelchair": "Wheelchair accessible?"
      },
      "ie": {
        "action": {
          "ignore": "Ignore",
          "upgrade": "Update Browser"
        },
        "warning": {
          "headline": "We apologise!",
          "message": "You appear to be using Internet Explorer. Wheelmap requires a standards compliant browser to work properly. Please consider using Firefox, Chrome, Safari or Opera."
        }
      },
      "link": {
        "node": {
          "create": "Lisää uusi paikka"
        }
      },
      "overlay": {
        "button": "Okay, let’s go!",
        "categories": "Filter places by categories",
        "filter": "Filter places by wheelchair accessibility",
        "headline": "Mark and find wheelchair accessible places with Wheelmap.org - worldwide and for free. It’s easy:",
        "lookup": "Search for a specific place",
        "secondary_headline": "Our traffic light system to mark the wheelchair accessibility of public places:"
      },
      "popup": {
        "form": {
          "limited": "Osittain esteetön pääsy pyörätuolilla ",
          "no": "Ei saavutettavissa pyörätuolilla",
          "save": "Update",
          "unknown": "Tuntematon status",
          "yes": "Pääsy pyörätuolilla"
        },
        "help": "Wheelchair accessible? (Help)",
        "more": "more ..."
      },
      "zoom_alert": "Zoom in closer to see more places."
    }
  },
  "how?": "How?",
  "landing_pages": {
    "index": {
      "wheelchair": {
        "limit": {
          "headline": "All partially wheelchair accessible %{type} in %{city} (%{count})"
        },
        "no": {
          "headline": "All not wheelchair accessible %{type} in %{city} (%{count})"
        },
        "unknown": {
          "headline": "All %{type} in %{city} with unknown wheelchair status (%{count})"
        },
        "yes": {
          "headline": "All wheelchair accessible %{type} in %{city} (%{count})"
        }
      }
    }
  },
  "layouts": {
    "application": {
      "banner": {
        "alt": "A project by Sozialhelden.de"
      }
    }
  },
  "models": {
    "category": {
      "prompt": "Choose a category"
    },
    "node": {
      "info_edit_position": "The location will appear on the Wheelmap as it is shown above. If the marker is not in the correct spot you can <a href=\"%{url}\">change its position on the OpenStreetMap.</a>",
      "mail": {
        "body": "(Please only write in English or German.)\n\nHi Sozialhelden,\nsomething is wrong with location: %{url}\n\nThe problem is:",
        "subject": "[Wheelmap] Problem with %{headline}"
      }
    },
    "node_type": {
      "prompt": "Choose a type"
    }
  },
  "node": {
    "address": {
      "city": "%{city} %{postcode}",
      "street": "%{housenumber} %{street}"
    },
    "tags": {
      "phone": "Phone:",
      "website": "Website:"
    }
  },
  "nodes": {
    "create": {
      "flash": {
        "not_successfull": "Oops, your input was either incorrect or incomplete",
        "successfull": "Thank you, your submission was saved successfully and will be online shortly."
      }
    },
    "edit": {
      "header": {
        "title": "Edit place: %{node} | wheelmap.org"
      },
      "link": {
        "large_map": "&laquo; Cancel"
      }
    },
    "errors": {
      "default": "Oops something went wrong. We have been informed about this issue",
      "not_authorized": "Sorry, authentication failed",
      "not_available": "Sorry, this page is temporarily not available.",
      "not_existent": "Sorry, this place is not available anymore.",
      "not_found": "Sorry, page not found.",
      "param_missing": "Please provide a search term"
    },
    "flash": {
      "authorize_wheelmap": "You need an OpenStreetMap account to modify data"
    },
    "new": {
      "form": {
        "legend": "Location of the place",
        "location": "Please click on the map where the place is located!",
        "section": {
          "accessibility": {
            "name": "Wheelchair accessibility",
            "title": "Information on wheelchair accessibility"
          },
          "address": {
            "help": "You can move the marker to the correct location on the map.",
            "name": "Osoite",
            "title": "Where is the place?"
          },
          "contact": {
            "name": "Contact",
            "title": "Other contact information"
          },
          "name_category": {
            "name": "Name and place type",
            "title": "Give us some initial information about your place:"
          },
          "overview": {
            "title": "Is all the information correct?"
          },
          "similar_nodes": {
            "empty": "No similar places were found.",
            "go_edit": "Continue with this place",
            "go_new": "It is none of the places above …",
            "name": "Similar places",
            "title": "We found similar places nearby. Is it one of these?"
          }
        },
        "title": "Add a place"
      },
      "header": {
        "title": "New place | wheelmap.org"
      },
      "link": {
        "large_map": "&laquo; Cancel"
      }
    },
    "node": {
      "link": {
        "claim": "Do you work here?",
        "edit_node": "Edit place",
        "report_bug": "Report a problem"
      }
    },
    "node_data": {
      "address": "Osoite:",
      "contact_details": "Contact details:"
    },
    "node_edit": {
      "details": "Yksityiskohdat",
      "edit": "Muokkaa"
    },
    "node_map": {
      "map": "Map:"
    },
    "node_note": {
      "comment": "Comment:"
    },
    "node_photos": {
      "add": "Add",
      "photos_of_this_place": "Photos of this place:",
      "upload": "Upload"
    },
    "node_similar": {
      "similar": "Similar places: %{name}"
    },
    "node_status": {
      "accessible_toilet": "Wheelchair accessible toilet:",
      "premium": "%{name} says: this place is",
      "wheelchair_accessibility": "Wheelchair accessibility:"
    },
    "node_streetview": {
      "streetview": "Streetview:"
    },
    "show": {
      "header": {
        "meta": {
          "description": "Find out if this place is wheelchair accessible on Wheelmap.org. Or add further information and photos to the place.",
          "title": "This place is on Wheelmap.org: %{name}"
        },
        "title": "Place: %{node} | wheelmap.org"
      },
      "link": {
        "back": "back",
        "large_map": "Enlarge",
        "listing": "All places of typ '%{type}' in %{city}",
        "upload": "Upload image"
      },
      "more_data_from": "There is more information about this place, validated by:",
      "share": {
        "email": "Sähköposti",
        "facebook": "Facebook",
        "text": "I found this place on Wheelmap.org: %{name}",
        "twitter": "Twitter"
      },
      "show-in-osm": "OpenStreetMap"
    },
    "update": {
      "flash": {
        "not_successfull": "Oops, your input was either incorrect or incomplete",
        "successfull": "Thank you, your submission was saved successfully and will be online shortly."
      }
    },
    "update_wheelchair": {
      "successfull": "The status for \"%{name}\" has been changed to \"%{status}\" and will be online shortly."
    }
  },
  "number": {
    "currency": {
      "format": {
        "delimiter": ",",
        "format": "%u%n",
        "precision": 2,
        "separator": ".",
        "significant": false,
        "strip_insignificant_zeros": false,
        "unit": "$"
      }
    },
    "format": {
      "delimiter": ",",
      "precision": 3,
      "separator": ".",
      "significant": false,
      "strip_insignificant_zeros": false
    },
    "human": {
      "decimal_units": {
        "format": "%n %u",
        "units": {
          "billion": "Billion",
          "million": "Million",
          "quadrillion": "Quadrillion",
          "thousand": "Thousand",
          "trillion": "Trillion",
          "unit": ""
        }
      },
      "format": {
        "delimiter": "",
        "precision": 3,
        "significant": true,
        "strip_insignificant_zeros": true
      },
      "storage_units": {
        "format": "%n %u",
        "units": {
          "byte": {
            "one": "Byte",
            "other": "Bytes"
          },
          "gb": "GB",
          "kb": "KB",
          "mb": "MB",
          "tb": "TB"
        }
      }
    },
    "percentage": {
      "format": {
        "delimiter": "",
        "format": "%n%"
      }
    },
    "precision": {
      "format": {
        "delimiter": ""
      }
    }
  },
  "oauth": {
    "application": {
      "connect": {
        "headline": "You need to connect your account with your OpenStreetMap account before you can create or modify places on Wheelmap.org."
      }
    },
    "callback": {
      "notice": "Your Wheelmap account is now connected to the OpenStreetMap account %{user}."
    }
  },
  "or": "or",
  "place": {
    "one": "%{count} place",
    "other": "%{count} places"
  },
  "poi": {
    "category": {
      "accommodation": "Majoitus",
      "education": "Sivistys",
      "food": "Ruokailu",
      "government": "Hallitus",
      "health": "Terveys",
      "leisure": "Vapaa-aika",
      "misc": "Sekalaiset",
      "money_post": "Pankki / Postitoimisto",
      "public_transfer": "Julkinen liikenne",
      "shopping": "Ostos",
      "sport": "Urheilu",
      "tourism": "Matkailu",
      "unknown": "Tuntematon "
    },
    "name": {
      "accommodation": {
        "beach_resort": "Rantahotelli",
        "bed_and_breakfast": "Aamiaismajoitus",
        "camp_site": "Leirintäalue",
        "caravan_site": "Leirintäalue",
        "chalet": "Alppimaja",
        "dormitory": "Asuntola",
        "guest_house": "Vierastalo",
        "hostel": "Hostelli",
        "hotel": "Hotelli",
        "motel": "Motelli"
      },
      "education": {
        "college": "Oppilaitos",
        "driving_school": "Autokoulu",
        "kindergarten": "Päiväkoti",
        "library": "Kirjasto",
        "museum": "Museo",
        "school": "Oppilaitos",
        "university": "Yliopisto"
      },
      "food": {
        "bar": "Baari",
        "biergarten": "Kesäterassi",
        "cafe": "Kahvila",
        "drinking_water": "Vesipiste",
        "fast_food": "Pikaruoka",
        "ice_cream": "Jäätelöbaari",
        "pub": "Pubi",
        "restaurant": "Ravintola"
      },
      "government": {
        "courthouse": "Oikeustalo",
        "embassy": "Lähetystö",
        "employment_agency": "Työvoimatoimisto",
        "government": "Viranomainen",
        "police": "Poliisi",
        "public_building": "Julkinen rakennus",
        "townhall": "Kaupungintalo"
      },
      "health": {
        "alternative": "Vaihtoehtoisen lääketieteen harjoittaja",
        "dentist": "Hammaslääkäri",
        "doctors": "Lääkäri",
        "hearing_aids": "Kuulon apuvälineiden myyjä",
        "hospital": "Sairaala",
        "medical_supply": "Lääkintätarvikkeet",
        "occupational_therapist": "Toimintaterapeutti",
        "pharmacy": "Apteekki",
        "physiotherapist": "Fysioterapeutti",
        "psychotherapist": "Psykoterapeutti",
        "social_facility": "Yhteisöllinen tila",
        "speech_therapist": "Puheterapeutti",
        "veterinary": "Eläinlääkäri"
      },
      "leisure": {
        "arena": "Areena",
        "brothel": "Ilotalo",
        "casino": "Kasino",
        "cinema": "Elokuvateatteri",
        "community_centre": "Kohtaamispaikka",
        "gallery": "Galleria",
        "massage": "Hieroja",
        "nightclub": "Yökerho",
        "playground": "Leikkikenttä ",
        "sauna": "Sauna",
        "stripclub": "Strippiklubi",
        "tattoo": "Tatuointiliike",
        "theatre": "Teatteri",
        "zoo": "Eläintarha"
      },
      "misc": {
        "association": "Yhdistys",
        "company": "Yhtiö (Toimisto)",
        "estate_agent": "Kiinteistövälittäjä",
        "insurance": "Vakuutus",
        "lawyer": "Asianajaja",
        "ngo": "Kansalaisjärjestö",
        "place_of_worship": "Paikka uskonnon harjoittamiseen",
        "political_party": "Puoluetoimisto",
        "toilets": "Vessat"
      },
      "money_post": {
        "atm": "Pankkiautomaatti",
        "bank": "Pankki",
        "bureau_de_change": "Valuutanvaihtopiste",
        "post_box": "Postilaatikko",
        "post_office": "Postitoimisto"
      },
      "public_transfer": {
        "aerodrome": "Lentokenttä",
        "bicycle_parking": "Pyöräparkki",
        "bicycle_rental": "Pyörävuokraamo",
        "boatyard": "Venesatama",
        "bus_station": "Linja-autoasema",
        "bus_stop": "Linja-autopysäkki",
        "cable_car": "Köysirata",
        "car_rental": "Autovuokraamo",
        "car_sharing": "Auton yhteiskäyttö",
        "chair_lift": "Tuolihissi",
        "ferry": "Autolautta",
        "ferry_terminal": "Lauttaterminaali",
        "fuel": "Huoltoasema",
        "halt": "Seisake",
        "light_rail": "Raitiotie",
        "parking": "Pysäköinti",
        "parking_aisle": "Parkkipaikan osa",
        "platform": "Laituri",
        "station": "Juna-asema",
        "subway_entrance": "Metron sisäänkäynti",
        "terminal": "Lentokentän terminaali",
        "tram_stop": "Raitiovaunupysäkki"
      },
      "shopping": {
        "alcohol": "Viina",
        "antiques": "Antiikkiliike",
        "art": "Galleriamyymälä",
        "bakery": "Leipomo",
        "beauty": "Kauneushoitola",
        "beverages": "Juotavaa",
        "bicycle": "Pyöräliike",
        "books": "Kirjoja",
        "butcher": "Lihakauppa",
        "car_repair": "Autokorjaamo",
        "car_shop": "Autokauppa",
        "chemist": "Apteekki",
        "clothes": "Vaatteita",
        "computer": "Tietokone",
        "confectionery": "Karkkikauppa",
        "convenience": "Sopivuus",
        "copyshop": "Kopiointiliike",
        "deli": "Herkkukauppa",
        "department_store": "Tavaratalo",
        "doityourself": "Tee se itse",
        "dry_cleaning": "Kuivapesupalvelu",
        "electronics": "Elektroniikka",
        "erotic": "Seksikauppa",
        "fabric": "Kangaskauppa",
        "farm_shop": "Maatilatori",
        "florist": "Kukkakauppa",
        "funeral_directors": "Hautaustoimisto",
        "furniture": "Huonekaluja",
        "garden_centre": "Puutarhamyymälä",
        "gift": "Lahjatavaraliike",
        "greengrocer": "Vihanneskauppias",
        "hairdresser": "Kampaamo",
        "hardware": "Työkaluja",
        "interior_decoration": "Sisustusliike",
        "jewelry": "Koruliike",
        "kiosk": "Kioski",
        "laundry": "Pesula",
        "mall": "Ostoskeskus",
        "mobile_phone": "Puhelinmyymälä",
        "music": "Levykauppa",
        "musical_instrument": "Musiikkiliike",
        "newsagent": "Tietotoimisto",
        "optician": "Optikko",
        "organic": "Luomumyymälä",
        "outdoor": "Ulkoiluvarusteet",
        "pet": "Lemmikkikauppa",
        "photo": "Kuva",
        "second_hand": "Kirpputori",
        "shoes": "Kenkiä",
        "sports": "Urheilu",
        "stationery": "Kirjoitustarvikkeet",
        "supermarket": "Supermarketti",
        "tailor": "Räätäli",
        "tea": "Teekauppa",
        "tobacco": "Tupakkakauppa",
        "toys": "Lelut",
        "travel_agency": "Matkatoimisto",
        "variety_store": "Halpahintamyymälä",
        "video": "Videovuokraamo"
      },
      "sport": {
        "pitch": "Urheilukenttä",
        "sports_centre": "Urheilukeskus",
        "stadium": "Stadion",
        "swimming": "Uinti",
        "swimming_pool": "Uima-allas"
      },
      "tourism": {
        "archaeological_site": "Arkeologinen kohde",
        "arts_centre": "Taidekeskus",
        "artwork": "Taideteos",
        "attraction": "Nähtävyys",
        "battlefield": "Taistelutanner",
        "beach": "Ranta",
        "beacon": "Majakka",
        "castle": "Linnoitus",
        "cave_entrance": "Luolan suuaukko",
        "information": "Matkailuneuvonta",
        "memorial": "Muistomerkki",
        "theme_park": "Teemapuisto",
        "tower": "Torni",
        "viewpoint": "Näköalapaikka"
      },
      "unknown": {
        "unknown": "Tuntematon"
      }
    }
  },
  "profile": {
    "edit": {
      "application": {
        "oauth": {
          "connected": "Status: connected",
          "grant": "Connect now",
          "not_connected": "Status: Not connected",
          "revoke": "Disconnect"
        }
      },
      "headline": "Edit your profile"
    }
  },
  "ransack": {
    "all": "all",
    "and": "and",
    "any": "any",
    "asc": "ascending",
    "attribute": "attribute",
    "combinator": "combinator",
    "condition": "condition",
    "desc": "descending",
    "or": "or",
    "predicate": "predicate",
    "predicates": {
      "blank": "is blank",
      "cont": "contains",
      "cont_all": "contains all",
      "cont_any": "contains any",
      "does_not_match": "doesn't match",
      "does_not_match_all": "doesn't match all",
      "does_not_match_any": "doesn't match any",
      "end": "ends with",
      "end_all": "ends with all",
      "end_any": "ends with any",
      "eq": "equals",
      "eq_all": "equals all",
      "eq_any": "equals any",
      "false": "is false",
      "gt": "greater than",
      "gt_all": "greater than all",
      "gt_any": "greater than any",
      "gteq": "greater than or equal to",
      "gteq_all": "greater than or equal to all",
      "gteq_any": "greater than or equal to any",
      "in": "in",
      "in_all": "in all",
      "in_any": "in any",
      "lt": "less than",
      "lt_all": "less than all",
      "lt_any": "less than any",
      "lteq": "less than or equal to",
      "lteq_all": "less than or equal to all",
      "lteq_any": "less than or equal to any",
      "matches": "matches",
      "matches_all": "matches all",
      "matches_any": "matches any",
      "not_cont": "doesn't contain",
      "not_cont_all": "doesn't contain all",
      "not_cont_any": "doesn't contain any",
      "not_end": "doesn't end with",
      "not_end_all": "doesn't end with all",
      "not_end_any": "doesn't end with any",
      "not_eq": "not equal to",
      "not_eq_all": "not equal to all",
      "not_eq_any": "not equal to any",
      "not_in": "not in",
      "not_in_all": "not in all",
      "not_in_any": "not in any",
      "not_null": "is not null",
      "not_start": "doesn't start with",
      "not_start_all": "doesn't start with all",
      "not_start_any": "doesn't start with any",
      "null": "is null",
      "present": "is present",
      "start": "starts with",
      "start_all": "starts with all",
      "start_any": "starts with any",
      "true": "is true"
    },
    "search": "search",
    "sort": "sort",
    "value": "value"
  },
  "search": {
    "index": {
      "no-results": {
        "headline": "Sorry, we couldn’t find a place called \"%{query}\".",
        "hint": {
          "example": "<strong>Example:</strong> London, United Kingdom",
          "info": "Our search service only works with name and/or address information. Hence, please either search for the name of the place or an address, e.g. street name and/or city. Searching for a type of place, e.g. restaurant or cinema, does not work!",
          "work_in_progress": "We work hard to make searching for places easier and more intuitive in the future."
        },
        "try_this": {
          "address": "Please provide more <strong>address details</strong>.",
          "intro": "Try this:",
          "spell_check": "Check the <strong>spelling</strong> of your input."
        }
      },
      "results": {
        "ticker": {
          "one": "%{count} result:",
          "other": "%{count} results:"
        }
      },
      "search": {
        "for": "Searching for \"%{q}\"",
        "not_found": "No places could be found!"
      }
    },
    "timeout": {
      "headline": "Sorry, something went wrong",
      "info": "Our search service was temporarily not available.",
      "repeat_search": "Retry search"
    }
  },
  "splash": {
    "countline": "%{count} places have already been marked.",
    "headline": "Everyone can add wheelchair accessible places!",
    "start": "Start",
    "step1": "Click on a place you know",
    "step2": "Mark it and click save",
    "step3": "That's it! No registration necessary",
    "what_is_wheelmap": "What is Wheelmap?"
  },
  "statistics": "Statistics",
  "support": {
    "array": {
      "last_word_connector": " and ",
      "sentence_connector": "and",
      "two_words_connector": " and ",
      "words_connector": ","
    },
    "select": {
      "prompt": "Please select"
    }
  },
  "time": {
    "am": "am",
    "formats": {
      "default": "%a, %d %b %Y %H:%M:%S %z",
      "long": "%B %d, %Y %H:%M",
      "short": "%d %b %H:%M"
    },
    "pm": "pm"
  },
  "toiletstatus": {
    "no": "No wheelchair accessible toilet",
    "unknown": "Toilet status unknown",
    "what_is": {
      "no": "Doorways' inner width min. 90 cm (35 in), clear floor space min. 150 x 150 cm (59 x 59 in), wheelchair-height toilet seat, folding grab rails and accessible hand basin.",
      "unknown": "Help out by marking the toilet status!",
      "yes": "Doorways' inner width min. 90 cm (35 inc), clear floor space min. 150 x 150 cm (59 x 59), wheelchair-height toilet seat, folding grab rails and accessible hand basin."
    },
    "yes": "Wheelchair accessible toilet"
  },
  "user_sessions": {
    "create": {
      "activation": {
        "notice": "Your account is activated now!"
      },
      "error": {
        "notice": "Email and password don't match."
      },
      "notice": "You're in!"
    },
    "destroy": {
      "notice": "Bye, come back soon!"
    },
    "new": {
      "email": "Email address",
      "login": "Log in",
      "login_with_twitter": "Log in with Twitter",
      "password": "Salasana",
      "remember_me": "Stay logged in"
    }
  },
  "users": {
    "after_signup_edit": {
      "welcome": {
        "headline": "You are almost there! Now on to finalize your Wheelmap account:",
        "set_password_for_mobile": "You have successfully registered with OpenStreetMap. Please choose an email address that you would like Wheelmap to use so we can keep you informed about your activities (for example the number of places you have marked). You can access this information on your \"Profile\".",
        "text": "How can we get in touch with you? You can change this information later in your profile."
      }
    },
    "edit": {
      "headline": {
        "your_images": "Your uploaded images"
      }
    },
    "profile": {
      "edit": {
        "legends": {
          "user_data": "Your account information"
        },
        "title": "Profile"
      },
      "newsletter": {
        "label": "Yes, keep me updated about Wheelmap.",
        "text": "Stay up to date with the Wheelmap newsletter. Don't worry, we won't spam you. You'll hear from us once a month at most.",
        "title": "Newsletter"
      },
      "photos": {
        "empty": "You haven't uploaded any photos yet.",
        "title": "Kuvia"
      },
      "show": {
        "greeting": {
          "anonymously": "Hello there",
          "personalized": "Hello %{name}"
        },
        "overview": {
          "photos_uploaded": {
            "one": "uploaded %{count} photo",
            "other": "uploaded %{count} photos"
          },
          "pois_added": {
            "one": "added %{count} place",
            "other": "added %{count} places"
          },
          "pois_edited": {
            "one": "edited %{count} place",
            "other": "edited %{count} places"
          },
          "pois_marked": {
            "one": "marked %{count} place",
            "other": "marked %{count} places"
          },
          "text": "You have"
        },
        "text_html": "Hello there,<br>\nWelcome (back) to Wheelmap.org! We’re happy to have you on board! You can browse our <a href=\"http://news.wheelmap.org/en/\">Blog</a> or <a href=\"http://news.wheelmap.org/en/FAQ/\">FAQs</a> if you want to get to know Wheelmap.org a bit better. Or you can learn more about the <a href=\"http://news.wheelmap.org/en/wheelmap-ambassador/\">projects</a> we offer around Wheelmap.org and how you can get involved.<br>\nTo stay in contact you can subscribe to our monthly newsletter and follow us on <a href=\"https://www.facebook.com/wheelmap\">Facebook</a> and <a href=\"https://twitter.com/wheelmap\">Twitter</a>. We’re looking forward to hearing your opinion and starting a conversation with you!<br>\nAnd now, happy mapping!<br>\nYour Wheelmap team",
        "title": "Overview"
      },
      "widget": {
        "categories": "Show category filter",
        "center": "Map area",
        "empty_center": "Search for center of map …",
        "empty_provider": "Choose a Provider",
        "height": "Height",
        "legends": {
          "embed": "Embed code",
          "embed_explanation": "You can change the specifications for latitude (<code>lat</code>), longitude (<code>lon</code>) and zoom level (<code>zoom</code>) in the code above manually and thereby adjust the map segment (widget) according to the location you want to show.",
          "general": "Create your own Wheelmap widget and embed it in your website or blog.",
          "preview": "Preview",
          "settings": "Asetukset"
        },
        "providers": "Provider",
        "title": "Widget",
        "width": "Width"
      }
    }
  },
  "views": {
    "pagination": {
      "first": "&laquo; Ensimmäinen",
      "last": "Viimeinen &raquo;",
      "next": "Seuraava &rsaquo;",
      "previous": "&lsaquo; Edellinen",
      "truncate": "&hellip;"
    }
  },
  "wheelchairstatus": {
    "limited": "Osittain esteetön pääsy pyörätuolilla ",
    "no": "Ei saavutettavissa pyörätuolilla",
    "unknown": "Tuntematon status",
    "yes": "Pääsy pyörätuolilla"
  },
  "wheelmap": {
    "footer": {
      "a_project_of": "A project by",
      "based_on": "Based on",
      "become_a_supporter": "Become a supporter",
      "main_supporter": "Main supporter"
    },
    "itunes": {
      "alt": "AppStore Logo",
      "title": "Download the iPhone App now!"
    },
    "logo": {
      "alt": "Wheelmap Logo - find wheelchair accessible places",
      "title": "Wheelmap - find wheelchair accessible places"
    },
    "what_is": {
      "fully_accessible": "Entrance without steps, all rooms without steps.",
      "limited_accessible": "Entrance has one step with max. height 7cm (3 in), most rooms are without steps.",
      "not_accessible": "Entrance has a step or several steps, rooms are not accessible.",
      "unknown_accessible": "Auta merkitsemällä paikkoja!"
    }
  },
  "will_paginate": {
    "next_label": "Next &#8594;",
    "page_entries_info": {
      "multi_page": "Displaying %{model} %{from} - %{to} of %{count} in total",
      "multi_page_html": "Displaying %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b> of <b>%{count}</b> in total",
      "single_page": {
        "one": "Displaying 1 %{model}",
        "other": "Displaying all %{count} %{model}",
        "zero": "No %{model} found"
      },
      "single_page_html": {
        "one": "Displaying <b>1</b> %{model}",
        "other": "Displaying <b>all&nbsp;%{count}</b> %{model}",
        "zero": "No %{model} found"
      }
    },
    "page_gap": "&hellip;",
    "previous_label": "&#8592; Previous"
  }
});
