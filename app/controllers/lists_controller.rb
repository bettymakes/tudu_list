class ListsController < ApplicationController
  def index
    @lists = List.all.reverse
    @list = List.new
    
    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @lists }
    end

  end

  def new
    @list = List.new
  end

  def create
    @list = List.new(list_params)
    @list.save 
    # render nothing: true
    redirect_to lists_path #, :notice => "Task Added!"
    # else
    #   flash.now.alert = "Try Again."
    #   render :new
    # end
  end

  def show
    @list = List.find(params[:id])

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @lists }
    end
    
  end

  def edit
    @list = List.find(params[:id])
  end

  def update
    @list = List.find(params[:id])
    @list.update_attributes(list_params)
    # render nothing: true
    redirect_to lists_path
    # else
    #   render nothing: true
    # end
  end

  def destroy
    @list = List.find(params[:id])
    @list.destroy
    render nothing:true
  end

  private
    def list_params
      params.require(:list).permit(
        :task,
        :priority
      )
    end



end