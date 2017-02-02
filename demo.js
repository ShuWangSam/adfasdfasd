angular.module('SamDemo',[

]
)
.controller('MainCtrl', function($scope){
  $scope.categories = [
    {"id":0, "name":"Development"},
    {"id":1, "name":"Design"},
    {"id":2, "name":"Exercise"},
    {"id":3, "name":"Humor"}
  ];
  $scope.bookmarks = [
    {"id":0, "title": "AngularJs","url":"", "category":"Development"},
    {"id":1, "title": "Egghead.io","url":"", "category":"Development"},
    {"id":2, "title": "A List Apart","url":"", "category":"Development"},
    {"id":3, "title": "One page more","url":"", "category":"Design"},
    {"id":4, "title": "mobilityWOD","url":"", "category":"Design"},
    {"id":5, "title": "Robb WOlf","url":"", "category":"Exercise"},
    {"id":6, "title": "Senor Gif","url":"", "category":"Exercise"},
    {"id":7, "title": "Wimp","url":"", "category":"Humor"},
    {"id":8, "title": "Dump","url":"", "category":"Humor"},
  ];
  $scope.currentCategory = null;
  $scope.isCreating=false;
  $scope.isEditing= false;
  function setCurrentCategory(category){
    console.log(category)
    $scope.currentCategory =category;
    cancelCreating();
    cancelEditing();
  }
  function isCurrentCategory(category){
   return $scope.currentCategory != null && category.name ==$scope.currentCategory.name;
 }


  function cancelCreating(){
    $scope.isCreating= false;
  }
  function cancelEditing(){
    $scope.isEditing =false;
  }
  function startCreating(){
    $scope.isCreating= true;
    $scope.isEditing =false;
    resetCreateForm();
  }
  function startEditing(){
    $scope.isCreating= false;
    $scope.isEditing = true;
  }


function shouldShowCreating(){
  return $scope.currentCategory && !$scope.isEditing;
}
function shouldShowEditing(){
  return $scope.isEditing && !$scope.isCreating;
}

  $scope.startEditing= startEditing;
  $scope.startCreating =startCreating;
  $scope.cancelEditing = cancelEditing;
  $scope.cancelCreating = cancelCreating;
  $scope.setCurrentCategory = setCurrentCategory;
  $scope.shouldShowEditing= shouldShowEditing;
  $scope.shouldShowCreating = shouldShowCreating;
  $scope.isCurrentCategory = isCurrentCategory;
  //------------------------------------------------------------------
  //CRUD
  //----------------------------------------

  function resetCreateForm(){
    $scope.newBookmark ={
      title : "",
      url : "",
      category: $scope.currentCategory

    }
  }
  function createBookmark(bookmark){
    console.log(bookmark)
    bookmark.id =$scope.bookmarks.length;
  //  bookmark.title = newBookmark.title;
  //  bookmark.url  = newBookmark.url;
    $scope.bookmarks.push(bookmark);
    resetCreateForm();
  }
  $scope.editedBookmark = null;

  function setEditedBookmark(bookmark){
      $scope.editedBookmark=angular.copy(bookmark);
  }

  function updateBookmark(bookmark){
    var index = _.findIndex($scope.bookmarks, function(b){
      return b.id == bookmark.id;
    });
    $scope.bookmarks[index]= bookmark;
    $scope.editedBookmark= null;
    $scope.isEditing =false;
  }

  function isSelectedBookmark(BookmarkId){
    return $scope.editedBookmark !==null && scope.editedBookmark.id ===BookmarkId;
  }

  function deleteBookmark(bookmark){
    _.remove($scope.bookmarks, function(b){
      return b.id ==bookmark.id;
    });
  }





  $scope.setEditedBookmark = setEditedBookmark;
  $scope.updateBookmark= updateBookmark;
  $scope.createBookmark = createBookmark;
  $scope.isSelectedBookmark= isSelectedBookmark;
  $scope.resetCreateForm = resetCreateForm;
  $scope.deleteBookmark = deleteBookmark;
});
