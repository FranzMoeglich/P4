document.addEventListener('DOMContentLoaded', function() {

    let searchField = document.getElementById('søgefelt');
    let mapsArray = Array.from(document.getElementsByClassName('map'));

    
    searchField.addEventListener('input', filterMaps);

   
    function filterMaps() {
   
        let searchTerm = searchField.value.trim().toLowerCase();
        
       
        for (let i = 0; i < mapsArray.length; i++) {
           
            let address = mapsArray[i].getElementsByTagName('p')[0].textContent.trim().toLowerCase();
            let display = 'none'; 

            if (address.includes(searchTerm)) {
                display = 'block';
            }

            mapsArray[i].style.display = display;
        }
    }
});
