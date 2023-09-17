function updateDataPage5() {
    var page_5_title = document.getElementById("page_5_title").value;
    var page_5_role_1 = document.getElementById("page_5_role_1").value;
    var page_5_role_2 = document.getElementById("page_5_role_2").value;
    var page_5_description = document.getElementById("page_5_description").value;
    var background_color_page_5 = document.getElementById("background_color_page_5").value;
    var publicDataRef = database.ref('publicDatapage5');
    publicDataRef.set({
        page_5_title: page_5_title,
        page_5_role_1: page_5_role_1,
        page_5_role_2 : page_5_role_2,
        page_5_description: page_5_description,
        background_color_page_5: background_color_page_5

    }, function(error) {
        if (error) {
            console.error("Data could not be updated." + error);
        } else {
            console.log("Data updated successfully.");
            // You can add a success message or further actions here if needed
            displayDatapage5();
        }
    });
}

function displayDatapage5() {
    var datapage_5_title = document.getElementById("page_5_title");
    var datarole_1 = document.getElementById("page_5_role_1");
    var datarole_2 = document.getElementById("page_5_role_2");
    var datapage_5_description = document.getElementById("page_5_description");
    var databackground_color = document.getElementById("background_color_page_5");
    var publicDataRef = database.ref('publicDatapage5');
    
    publicDataRef.on('value', function(snapshot) {
        var data = snapshot.val();
        
        if (data) {
            if (data.hasOwnProperty("page_5_title")) {
                datapage_5_title.value = data.page_5_title;
            } else {
                datapage_5_title.value = "";
            }
  
            if (data.hasOwnProperty("page_5_role_1")) {
                datarole_1.value = data.page_5_role_1;
            } else {
                datarole_1.value = "";
            }
            if (data.hasOwnProperty("page_5_role_1")) {
                datarole_2.value = data.page_5_role_2;
            } else {
                datarole_2.value = "";
            }
           
            if (data.hasOwnProperty("page_5_description")) {
                datapage_5_description.value = data.page_5_description;
            } else {
                datapage_5_description.value = "";
            }
            if (data.hasOwnProperty("background_color_page_5")) {
                databackground_color.value = data.background_color_page_5;
            } else {
                databackground_color.value = "";
            }
        } 

        console.log(datarole_2.value);
     
   
    });
}
