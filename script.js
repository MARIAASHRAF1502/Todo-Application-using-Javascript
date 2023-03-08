var app=angular.module("app",[]);
app.controller("todo",function($scope)
{
    $scope.name="";
    $scope.list=[];
    $scope.listvalue;
    $scope.showlist=function()
    {
        if($scope.name!="")
        {
        document.getElementById("list").style.visibility="visible";
        document.getElementById("errormessage").innerHTML="";
        }
        else
        {
            document.getElementById("errormessage").innerHTML="Event name required !"        
        }
    }
    $scope.add=function()
    {
        if($scope.listvalue!="")
        {
            $scope.list.push($scope.listvalue);
            $scope.listvalue="";
        }
    }

    $scope.delete=function(value)
    {
        /*here ng-click event delete function from html pass the parameter of value clicked from the 
        array(list) and we getting the index of the value using indexOf() built-in function.*/

        $scope.ind=$scope.list.indexOf(value);
        $scope.list.splice($scope.ind,1);
    }
 
    $scope.showevent=function()
    {
        document.getElementById("Event").style.visibility="visible";
    }
    $scope.remove=function()
    {
        document.getElementById("Event").style.visibility="hidden";
        document.getElementById("list").style.visibility="hidden";
    }

    $scope.done=function()
    {
        document.getElementById("Event").style.visibility="hidden";
        document.getElementById("list").style.visibility="hidden";
        document.getElementById("msg").style.visibility="visible";
    }

});