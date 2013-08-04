class SessionsController < ApplicationController
  def new
  end

  def show
  end

  def destroy
    logout
    redirect_to root_path, :notice => "Logged out"
  end
end
