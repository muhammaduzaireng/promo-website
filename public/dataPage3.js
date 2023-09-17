function updateDataPage3() {
    var page_3_title = document.getElementById("page_3_title").value;
    var page_3_role_1 = document.getElementById("page_3_role_1").value;
    var page_3_role_2 = document.getElementById("page_3_role_2").value;
    var page_3_description = document.getElementById("page_3_description").value;
    var background_color_page_3 = document.getElementById("background_color_page_3").value;
    var publicDataRef = database.ref('publicDataPage3');
    publicDataRef.set({
        page_3_title: page_3_title,
        page_3_role_1: page_3_role_1,
        page_3_role_2 : page_3_role_2,
        page_3_description: page_3_description,
        background_color_page_3: background_color_page_3

    }, function(error) {
        if (error) {
            console.error("Data could not be updated." + error);
        } else {
            console.log("Data updated successfully.");
            // You can add a success message or further actions here if needed
            displayDataPage3();
        }
    });
}

function displayDataPage3() {
    var datapage_3_title = document.getElementById("page_3_title");
    var datarole_1 = document.getElementById("page_3_role_1");
    var datarole_2 = document.getElementById("page_3_role_2");
    var datapage_3_description = document.getElementById("page_3_description");
    var databackground_color = document.getElementById("background_color_page_3");
    var publicDataRef = database.ref('publicDataPage3');
    
    publicDataRef.on('value', function(snapshot) {
        var data = snapshot.val();
        
        if (data) {
            if (data.hasOwnProperty("page_3_title")) {
                datapage_3_title.value = data.page_3_title;
            } else {
                datapage_3_title.value = "";
            }
  
            if (data.hasOwnProperty("page_3_role_1")) {
                datarole_1.value = data.page_3_role_1;
            } else {
                datarole_1.value = "";
            }
            if (data.hasOwnProperty("page_3_role_1")) {
                datarole_2.value = data.page_3_role_2;
            } else {
                datarole_2.value = "";
            }
           
            if (data.hasOwnProperty("page_3_description")) {
                datapage_3_description.value = data.page_3_description;
            } else {
                datapage_3_description.value = "";
            }
            if (data.hasOwnProperty("background_color_page_3")) {
                databackground_color.value = data.background_color_page_3;
            } else {
                databackground_color.value = "";
            }
        } 

        console.log(datarole_2.value);
     
   
    });
}
