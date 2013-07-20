class ListsController < ApplicationController
  def index
    @lists = List.all
  end

  def new
    @list = List.new
  end

  def create
    @list = List.new(list_params)
    if @list.save 
      redirect_to lists_path, :notice => "Task Added!"
    else
      flash.now.alert = "Try Again."
      render :new
    end
  end

  def show
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private
    def list_params
      params.require(:list).permit(
        :task,
        :priority
      )
    end

end