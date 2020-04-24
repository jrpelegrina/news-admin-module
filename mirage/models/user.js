import {Model, hasMany} from 'ember-cli-mirage';

export default Model.extend({
    // used by the serializer to determine whether
    // or not to include the post count
    postCount: false,

    roles: hasMany(),
    posts: hasMany()
});
