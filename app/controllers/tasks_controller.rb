class TasksController < ApplicationController
  def index
    @tasks = Task.all.order("order_num ASC")
    @task = Task.new
    
    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @tasks }
    end

  end

  def new
    @task = Task.new
  end

  def create
    @task = Task.new(task_params)
    @task.save 
    respond_to do |format|
      #format.html ... don't need this html, causes 500 error (looks for non-existant template)
      format.json { render json: @task }
    end
  end

  def show
    @task = Task.find(params[:id])
  end

  def edit
    @task = Task.find(params[:id])
  end

  def update
    @task = Task.find(params[:id])
    @task.update_attributes(task_params)
    
    head :ok
    # redirect_to tasks_path
    # else
    #   render nothing: true
    # end
  end

  def destroy
    @task = Task.find(params[:id])
    @task.destroy
    render nothing: true
  end

  private
    def task_params
      params.require(:task).permit(
        !!:task,!!
        :priority,
        :order_num
      )
    end

end