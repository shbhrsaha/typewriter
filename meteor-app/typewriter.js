
Texts = new Mongo.Collection("texts");

function updateText(newText) {
  var theText = Texts.findOne({}, {sort: {createdAt: -1}});

  if (theText) {
    Texts.update(theText._id, {$set: {text: newText}});
  } else {
    theText = {};
    theText.text = newText;
    Texts.insert(theText);
  }

}

if (Meteor.isClient) {

  Template.body.helpers({
    text: function () {
      return Texts.findOne({}, {sort: {createdAt: -1}});
    },
  });

  Template.body.events({
    "click #sync-button": function (event) {
      updateText(document.getElementById("text-editor").innerHTML);
    }
  });

}