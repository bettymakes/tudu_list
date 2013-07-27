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

var EditingTasks = function(){

//TuDu Edit Task Function
  //Edit Button Action
  $(".tudu-edit").on("click", function(){
    if(!$(this).parent().parent().hasClass("edit-mode")){

      $(".tudu-list-task").removeClass("edit-mode");
      $(".tudu-update").addClass("hidden");
      $(".tudu-edit").removeClass("hidden");
      $(".tudu-edit-form").addClass("hidden");
      $(".tudu-task").removeClass("hidden");
      $(".tudu-edit-cancel").addClass("hidden");

      $(".tudu-list-task").each(function(){
        $(this).find(".tudu-edit-input").val($(this).find(".tudu-task").text());
      })

      $(this).parent().parent().addClass("edit-mode");
      $(this).siblings(".tudu-update, .tudu-edit-cancel").removeClass("hidden");
      $(this).addClass("hidden");
      $(this).parent().parent().find(".tudu-task").addClass("hidden");
      $(this).parent().parent().find(".tudu-edit-form").removeClass("hidden");
      console.log("clicked")
    }
    // else{
    //   $(this).parent().parent().removeClass("edit-mode");
    //   console.log("removed")
    // }
  });


  //Cancel Button Action
  $(".tudu-edit-cancel").on("click", function(){
    $(this).addClass("hidden");
    $(this).siblings(".tudu-update").addClass("hidden");
    $(this).siblings(".tudu-edit").removeClass("hidden");
    $(this).parent().parent().removeClass("edit-mode");
    $(this).parent().parent().find(".tudu-edit-form").addClass("hidden");
    $(this).parent().parent().find(".tudu-task").removeClass("hidden");
    $(this).parent().siblings().find(".tudu-edit-input").val($(this).parent().parent().find(".tudu-task").text());
    console.log("cancel clicked")
  });


  //Update Button on Click Action
  $(".tudu-update").on("click", function(){
    var tuduTask = $(this).closest(".tudu-list-task");
    
    tuduTask.find(".tudu-edit-input").submit();
    tuduTask.find(".tudu-task").text(tuduTask.find(".tudu-edit-input").val());
    tuduTask.find(".tudu-edit-form").addClass("hidden");
    tuduTask.find(".tudu-task").removeClass("hidden");
    tuduTask.find(".tudu-task").hide().fadeIn(500);
    $(this).addClass("hidden");
    $(this).siblings(".tudu-edit-cancel").addClass("hidden");
    $(this).siblings(".tudu-edit").removeClass("hidden");
    tuduTask.removeClass("edit-mode");

    console.log("update clicked")
  });

  //Update Task on Enter Key Action
  $(".tudu-edit-input").on("keydown", function(event){
    if(event.keyCode == 13){
      console.log("Enter Pressed");
    }
  });

  //Delete Button Action
  $(".tudu-delete").on("click", function(){
    $(this).parent().parent().fadeOut(300);
    setTimeout(function(){
    $(this).parent().parent().remove();
    }, 350);
  });
}

EditingTasks();

  //TuDu Adding New Task
  $("#new_list").bind("ajax:complete", function(){
    var jsonUrl = "/lists.json";
    // Getting JSON to get the id of the newest task added
      $.getJSON(jsonUrl, function(data){
        console.log(data[0].id);
      $.ajax({
        url: "/lists/"+data[0].id,
        context: document.body,
        success: function(ajaxDataDocBody) {
          var item = $(ajaxDataDocBody).find(".tudu-list-task");
          $(".tudu-list").prepend(item);
          item.find(".tudu-task").hide().fadeIn(500);
          EditingTasks();
          $(".tudu-new-task-input").val("");

        }
      });
    });
  });
});











