import { Meteor } from 'meteor/meteor';
import { TasksCollections } from '../db/TasksCollections';

Meteor.publish('tasks', function publishTasks() {
    return TasksCollections.find({ userId: this.userId});
})