function checkUser(profiles,sendUser){
    for(var i=0;i<profiles.length;i++){
      if(profiles[0][i].profile.display_name==sendUser){
        return profiles[0][i].profile.display_name
      }
    }
}
