/*CALLS*/            
    $(document).ready(function(){
        $("body").on('click',"#cfp",function(){
                    $('#mainDiv').load('cfp.html');
        });
        $("body").on('click',"#workshops-special-sessions",function(){
                    $('#mainDiv').load('workshops-special-sessions.html');
        });
        $("body").on('click',"#tutorial",function(){
                    $('#mainDiv').load('tutorial.html');
        });
         $("body").on('click',"#news",function(){
                    $('#mainDiv').load('news.html');
        });
    $("body").on('click',"#summer-school",function(){
                    $('#mainDiv').load('summer-school.html');
        });    
    });
/*AUTHORS*/  
    $(document).ready(function(){
        $("body").on('click',"#paper-submission",function(){ 
            $('#mainDiv').load('paper-submission.html');
        }); 
        $("body").on('click',"#si",function(){ 
            $('#mainDiv').load('si.html');
        }); 
        $("body").on('click',"#camera-ready",function(){ 
            $('#mainDiv').load('camera-ready.html');
        }); 
    });
/*COMMITTEES*/  
    $(document).ready(function(){
        $("body").on('click',"#organizer",function(){ 
            $('#mainDiv').load('organizer.html');
        }); 
        $("body").on('click',"#technical-committee",function(){ 
            $('#mainDiv').load('technical-committee.html');
        }); 
    });
/*PROGRAM*/  
    $(document).ready(function(){
        $("body").on('click',"#program",function(){ 
            $('#mainDiv').load('program.html');
        }); 
        $("body").on('click',"#keynote",function(){ 
            $('#mainDiv').load('keynote.html');
        }); 
        $("body").on('click',"#panel",function(){ 
            $('#mainDiv').load('panel.html');
        }); 
        $("body").on('click',"#tutorial_list",function(){ 
            $('#mainDiv').load('tutorial_list.html');
        }); 
    });
/*ATTEND*/  
    $(document).ready(function(){
        $("body").on('click',"#participant-registration",function(){ 
            $('#mainDiv').load('participant-registration.html');
        }); 
        $("body").on('click',"#invitation-req",function(){ 
            $('#mainDiv').load('invitation-req.html');
        }); 
        $("body").on('click',"#venue",function(){ 
            $('#mainDiv').load('venue.html');
        }); 
        $("body").on('click',"#accomodation",function(){ 
            $('#mainDiv').load('accomodation.html');
        }); 
        $("body").on('click',"#edi",function(){ 
            $('#mainDiv').load('edi.html');
        }); 
        
    });
