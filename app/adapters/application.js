import DS from 'ember-data';

export
default DS.ActiveModelAdapter.extend({
    host: 'http://localhost:3000',
    headers: {
        "Accept": "application/json, text/javascript; q=0.01"
    }
});