import DS from 'ember-data';

export
default DS.Model.extend({
    name: DS.attr('string'),
    bio: DS.attr('string'),
    url: DS.attr('string', {
        readOnly: true
    }),
    posts: DS.hasMany('post')
});