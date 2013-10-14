#= require jquery
#= require jquery/jquery-migrate
#= require jquery/jquery.cookies.js
#= require i18n.js
#= require bootstrap
#= require custom-bootstrap.js.coffee
#= require handlebars
#= require ember
#= require ember-data
#= require leaflet/leaflet-src
#= require leaflet/leaflet.locate
#= require spin
#= require ember-leaflet
#= require_self
#= require wheelmap

I18n.defaultLocale = 'de'
I18n.locale = $('html').attr('lang')
I18n.fallbacks = true

Ember.FEATURES["query-params"] = true

Ember.Application.reopen
  # Transition end event
  customEvents: (()->
    customEvents = {}

    if $.support.transition?
      customEvents[$.support.transition.end] = 'transitionEnd'

    customEvents
  ).property()

Wheelmap = @Wheelmap = Ember.Application.create
  #LOG_TRANSITIONS: true
  rootElement: '#wheelmap'

Wheelmap.Router.reopen
  rootURL: '/map/'

Wheelmap.ViewHelper =
  getViews: (view)->
    views = [view]

    view.get('childViews').forEach (view)->
      views.pushObjects(Wheelmap.ViewHelper.getViews(view))

    return views

  enterDom: (view)->
    Wheelmap.ViewHelper.getViews(view).forEach (view)->
      Ember.View.states.inDOM.enter(view)

  exitDom: (view)->
    Wheelmap.ViewHelper.getViews(view).forEach (view)->
      Ember.View.states.inDOM.exit(view)