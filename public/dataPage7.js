function updateDatapage7() {
    var page_7_title = document.getElementById("page_7_title").value;
    var page_7_role_1 = document.getElementById("page_7_role_1").value;
    var page_7_role_2 = document.getElementById("page_7_role_2").value;
    var page_7_description = document.getElementById("page_7_description").value;
    var background_color_page_7 = document.getElementById("background_color_page_7").value;
    var publicDataRef = database.ref('publicDatapage7');
    publicDataRef.set({
        page_7_title: page_7_title,
        page_7_role_1: page_7_role_1,
        page_7_role_2 : page_7_role_2,
        page_7_description: page_7_description,
        background_color_page_7: background_color_page_7

    }, function(error) {
        if (error) {
            console.error("Data could not be updated." + error);
        } else {
            console.log("Data updated successfully.");
            // You can add a success message or further actions here if needed
            displayDatapage7();
        }
    });
}

function displayDatapage7() {
    var datapage_7_title = document.getElementById("page_7_title");
    var datarole_1 = document.getElementById("page_7_role_1");
    var datarole_2 = document.getElementById("page_7_role_2");
    var datapage_7_description = document.getElementById("page_7_description");
    var databackground_color = document.getElementById("background_color_page_7");
    var publicDataRef = database.ref('publicDatapage7');
    
    publicDataRef.on('value', function(snapshot) {
        var data = snapshot.val();
        
        if (data) {
            if (data.hasOwnProperty("page_7_title")) {
                datapage_7_title.value = data.page_7_title;
            } else {
                datapage_7_title.value = "";
            }
  
            if (data.hasOwnProperty("page_7_role_1")) {
                datarole_1.value = data.page_7_role_1;
            } else {
                datarole_1.value = "";
            }
            if (data.hasOwnProperty("page_7_role_1")) {
                datarole_2.value = data.page_7_role_2;
            } else {
                datarole_2.value = "";
            }
           
            if (data.hasOwnProperty("page_7_description")) {
                datapage_7_description.value = data.page_7_description;
            } else {
                datapage_7_description.value = "";
            }
            if (data.hasOwnProperty("background_color_page_7")) {
                databackground_color.value = data.background_color_page_7;
            } else {
                databackground_color.value = "";
            }
        } 

        console.log(datarole_2.value);
     
   
    });
}


