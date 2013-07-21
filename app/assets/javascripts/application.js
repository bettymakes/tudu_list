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

//TuDu Edit Task Function
  //Edit Button Action
  $(".tudu-edit").on("click", function(){
    if(!$(this).parent().parent().hasClass("edit-mode")){
      $(this).parent().parent().addClass("edit-mode");
      $(this).siblings(".tudu-update, .tudu-edit-cancel").removeClass("hidden");
      $(this).addClass("hidden");
      $(this).parent().parent().find(".tudu-task").addClass("hidden");
      $(this).parent().parent().find(".tudu-edit-form").removeClass("hidden");
      console.log("clicked")
    }
    else{
      $(this).parent().parent().removeClass("edit-mode");
      console.log("removed")
    }
  });


  //Cancel Button Action
  $(".tudu-edit-cancel").on("click", function(){
    $(this).addClass("hidden");
    $(this).siblings(".tudu-update").addClass("hidden");
    $(this).siblings(".tudu-edit").removeClass("hidden");
    $(this).parent().parent().removeClass("edit-mode");
    $(this).parent().parent().find(".tudu-edit-form").addClass("hidden");
    $(this).parent().parent().find(".tudu-task").removeClass("hidden");
    console.log("cancel clicked")
  });


  //Update Button Action
  $(".tudu-update").on("click", function(){
    $(this).parent().parent().find(".tudu-edit-input").submit();
    $(this).parent().parent().find(".tudu-task").text($(this).parent().parent().find(".tudu-edit-input").val());
    $(this).parent().parent().find(".tudu-edit-form").addClass("hidden");
    $(this).parent().parent().find(".tudu-task").removeClass("hidden");
    $(this).addClass("hidden");
    $(this).siblings(".tudu-edit").removeClass("hidden");
    $(this).parent().parent().removeClass("edit-mode");

    console.log("update clicked")
  });

  //Delete Button Action
  $(".tudu-delete").on("click", function(){
    $(this).parent().parent().fadeOut(300);
    setTimeout(function(){
    $(this).parent().parent().remove();
    }, 350);
  });

  //TuDu Adding New Task
  $("#new-list").bind("ajax:complete", function(){
    var jsonUrl = "lists/json";
    // Getting JSON to get the id of the newest task added
      $.getJSON(jsonUrl, function(data){
      $.ajax({
        url: "/lists/"+data[0].id,
        context: document.body,
        success: function(ajaxDataDocBody) {
          $(".tudu-list").prepend($(ajaxDataDocBody).find(".tudu-list-task"));
        }
      });
    });

  });
});











