Wheelmap.NodesController = Ember.ObjectController.extend()

Wheelmap.WheelchairSubmit = Ember.Mixin.create
  isPosting: false
  disableWheelchairSubmit: Ember.computed.not('wheelchairSubmit')

  isUnknown: (()->
    @get('oldWheelchair') == 'unknown' or @get('wheelchair') == 'unknown'
  ).property('oldWheelchair', 'wheelchair')

  wheelchairSubmit: (()->
    @get('oldWheelchair')? and @get('wheelchair') != @get('oldWheelchair') and !@get('isPosting')
  ).property('wheelchair', 'oldWheelchair', 'isPosting')

  wheelchairUri: (()->
    '/nodes/' + @get('id') + '/update_wheelchair.js'
  ).property('id')

  actions:
    setWheelchair: (wheelchair)->
      unless @get('isPosting')
        @set('wheelchair', wheelchair)

    saveWheelchair: ()->
      self = @

      unless self.get('wheelchairSubmit')
        return

      data =
        _method: 'PUT'
        wheelchair: self.get('wheelchair')

      self.set('isPosting', true)

      promise = Ember.$.ajax
        type: 'POST'
        url: self.get('wheelchairUri')
        data: data
        dataType: 'json'

      promise.done (response)->
        # Track this event, when google analytics is active (Production)
        _gaq.push ["_trackEvent", "Data", "Tag", self.get("wheelchair")]  if _gaq?
        self.set('oldWheelchair', null)
        self.send('wheelchairSaveDone', response)

      promise.fail (response)->
        # Track this event as failed, when google analytics is active (Production)
        _gaq.push ["_trackEvent", "Data", "Tag", "failed"]  if _gaq?
        @resetStatus()
        self.send('wheelchairSaveFail', response)

      promise.always ()->
        self.set('isPosting', false)

    wheelchairSaveDone: Ember.K
    wheelchairSaveFail: Ember.K

Wheelmap.NodesEditController = Wheelmap.NodesController.extend Wheelmap.WheelchairSubmit, Ember.Evented,
  errors: []
  needs: ['flash-messages']
  categories: []
  category: Ember.computed.oneWay('type.category')

  sortedCategories: (->
    Ember.ArrayProxy.createWithMixins Ember.SortableMixin,
      sortProperties: ['name']
      content: @get('categories')
  ).property('categories')

  sortedNodeTypes: (->
    Ember.ArrayProxy.createWithMixins Ember.SortableMixin,
      sortProperties: ['name'],
      content: @get('category.node_types')
  ).property('category.node_types')

  showNodeTypeSelect: Ember.computed.notEmpty('category')

  categoryDidChange: (->
    category = @get('category')

    if category? and category isnt @get('type.category')
      @set('type', @get('sortedNodeTypes.firstObject'))
  ).observes('category')

  actions:
    # Go back to map (use history, when not empty, or index/map route)
    backToMap: ->
      @transitionToRoute('popup', @get('id'))

    wheelchairSaveDone: (response)->
      @get('controllers.flash-messages').pushMessage('notice', response.message)

    wheelchairSaveFail: (response)->
      @get('controllers.flash-messages').pushMessage('error', response.message)

    save: ->
      that = @
      model = that.get('content')

      # Wrap the model save action into a promise so we can call async stuff before we actually save the model
      # More about promises: http://emberjs.com/api/classes/Ember.RSVP.Promise.html
      # TODO find a way to have more save listeners, at the moment the first listener calling resolve stops the event
      promise = new Ember.RSVP.Promise (resolve, reject)->
        that.one 'save', ->
          resolve()

        that.trigger('save', resolve, reject)

      promise.then ->
        model.save()

      promise.then ->
        that.get('controllers.flash-messages').pushMessage('notice', I18n.t('nodes.update.flash.successfull'))
        window.location.href = '/nodes/' + model.get('id')

      promise.catch (xhr)->
        if xhr instanceof Error
          throw xhr

        that.get('controllers.flash-messages').pushMessage('error', I18n.t('nodes.update.flash.not_successfull'))
        that.set('errors', xhr.responseJSON.errors)

    error: (message)->
      @get('controllers.flash-messages').pushMessage('error', message)