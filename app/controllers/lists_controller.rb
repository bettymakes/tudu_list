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
    @list = List.find(params[:id])
  end

  def edit
    @list = List.find(params[:id])
  end

  def update
    @list = List.find(params[:id])
    if @list.update_attributes(list_params)
      redirect_to lists_path
    else
      render :new
    end
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