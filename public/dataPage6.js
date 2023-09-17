function updateDatapage6() {
    var page_6_title = document.getElementById("page_6_title").value;
    var page_6_role_1 = document.getElementById("page_6_role_1").value;
    var page_6_role_2 = document.getElementById("page_6_role_2").value;
    var page_6_description = document.getElementById("page_6_description").value;
    var background_color_page_6 = document.getElementById("background_color_page_6").value;
    var publicDataRef = database.ref('publicDatapage6');
    publicDataRef.set({
        page_6_title: page_6_title,
        page_6_role_1: page_6_role_1,
        page_6_role_2 : page_6_role_2,
        page_6_description: page_6_description,
        background_color_page_6: background_color_page_6

    }, function(error) {
        if (error) {
            console.error("Data could not be updated." + error);
        } else {
            console.log("Data updated successfully.");
            // You can add a success message or further actions here if needed
            displayDatapage6();
        }
    });
}

function displayDatapage6() {
    var datapage_6_title = document.getElementById("page_6_title");
    var datarole_1 = document.getElementById("page_6_role_1");
    var datarole_2 = document.getElementById("page_6_role_2");
    var datapage_6_description = document.getElementById("page_6_description");
    var databackground_color = document.getElementById("background_color_page_6");
    var publicDataRef = database.ref('publicDatapage6');
    
    publicDataRef.on('value', function(snapshot) {
        var data = snapshot.val();
        
        if (data) {
            if (data.hasOwnProperty("page_6_title")) {
                datapage_6_title.value = data.page_6_title;
            } else {
                datapage_6_title.value = "";
            }
  
            if (data.hasOwnProperty("page_6_role_1")) {
                datarole_1.value = data.page_6_role_1;
            } else {
                datarole_1.value = "";
            }
            if (data.hasOwnProperty("page_6_role_1")) {
                datarole_2.value = data.page_6_role_2;
            } else {
                datarole_2.value = "";
            }
           
            if (data.hasOwnProperty("page_6_description")) {
                datapage_6_description.value = data.page_6_description;
            } else {
                datapage_6_description.value = "";
            }
            if (data.hasOwnProperty("background_color_page_6")) {
                databackground_color.value = data.background_color_page_6;
            } else {
                databackground_color.value = "";
            }
        } 

        console.log(datarole_2.value);
     
   
    });
}
