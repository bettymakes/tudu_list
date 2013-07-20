// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function(){
  $(".tudu-edit").on("click", function(){
    var p = $(this).parent();
    var tuTask = p.find(".tudu-task");

    if(!$(this).hasClass("clicked")) {
      $(".tudu-list-task").find(".tudu-edit").removeClass("clicked");
      $(".tudu-list-task").find(".tudu-edit-input").remove();
      $(".tudu-list-task").find(".tudu-edit").text("Edit");
      $(".tudu-list-task").find(".tudu-task").show();
      $(".tudu-list-task").find(".update-cancel").remove();
      $(this).addClass("clicked");
      tuTask.hide();
      tuTask.after('<input value="'+tuTask.text()+'" class="tudu-edit-input"></input>');
      $(this).text("Update ");
      $(this).after('<span class="update-cancel"> | <span class="update-cancel-click">Cancel</span></span>');
    }
    else {
      $(this).removeClass("clicked");
      tuTask.show();
      p.find(".tudu-edit-input").remove();
      $(this).text("Edit");
      $(".tudu-list-task").find(".update-cancel").remove();
    }

    $(".update-cancel-click").on("click", function(){
      $(this).removeClass("clicked");
      tuTask.show();
      p.find(".tudu-edit-input").remove();
      $(this).text("Edit");
      $(".tudu-list-task").find(".update-cancel").remove();

    });



  });
});