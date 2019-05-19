var oneSelected = 0;
var parkingLots = [];
var numberOfLots = 80;
for (var i = 0; i < 80; i++) parkingLots[i] = 0;

function slotSelected() {
    /*variables*/
    selectedId = event.srcElement.id;
    if (oneSelected === 0) {
        document.getElementById(selectedId).style.backgroundColor = 'rgba(0, 174, 255, 0.568)';
        oneSelected = 1;
        document.querySelector('.btn-buy').addEventListener('click', function() {
            if (parkingLots[selectedId - 1] === 0) {
                document.getElementById(selectedId).style.backgroundColor = 'rgba(255, 0, 0, 0.479)';
                parkingLots[selectedId - 1] = 1;
                oneSelected = 0;
                selectedId = '';
                numberOfLots--;
                document.getElementById('clicks').textContent = numberOfLots;
            } else {
                document.getElementById(selectedId).style.backgroundColor = 'rgba(255, 0, 0, 0.479)';
                alert('You cant buy a lot twice!');
                oneSelected = 0;
                selectedId = '';
            }
        });
        document.querySelector('.btn-rej').addEventListener('click', function() {
            if (parkingLots[selectedId - 1] == 0) {
                parkingLots[selectedId - 1] = 0;
                document.getElementById(selectedId).style.backgroundColor = 'rgba(66, 134, 49, 0.562)';
                oneSelected = 0;
                selectedId = '';
            } else {
                parkingLots[selectedId - 1] = 0;
                document.getElementById(selectedId).style.backgroundColor = 'rgba(66, 134, 49, 0.562)';
                oneSelected = 0;
                selectedId = '';
                numberOfLots++;
                document.getElementById('clicks').textContent = numberOfLots;
            }
        });
    }
}
