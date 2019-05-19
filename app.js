var oneSelected=0;
var parkingLots=[];
var numberOfLots=80;
for (var i=0;i<80;i++) parkingLots[i]=0;
function slotSelected(){
    /*variables*/
    selectedId=event.srcElement.id;
    if (oneSelected===0){
        document.getElementById(selectedId).style.backgroundColor='orange';
        oneSelected=1;
        document.querySelector('.btn-buy').addEventListener('click',function(){
            if (parkingLots[selectedId-1]===0){
                document.getElementById(selectedId).style.backgroundColor='red';
                parkingLots[selectedId-1]=1;
                oneSelected=0;
                selectedId='';
                numberOfLots--;
                document.getElementById('clicks').textContent=numberOfLots;
            } else {
                document.getElementById(selectedId).style.backgroundColor='red';
                alert('You cant buy a lot twice!');
                oneSelected=0;
                selectedId='';
            }
        });
        document.querySelector('.btn-rej').addEventListener('click',function(){
            if (parkingLots[selectedId-1]==0){
                parkingLots[selectedId-1]=0;
                document.getElementById(selectedId).style.backgroundColor='rgb(66, 134, 49)';
                oneSelected=0;
                selectedId='';
            } else {
                parkingLots[selectedId-1]=0;
                document.getElementById(selectedId).style.backgroundColor='rgb(66, 134, 49)';
                oneSelected=0;
                selectedId='';
                numberOfLots++;
                document.getElementById('clicks').textContent=numberOfLots;
            }
        });
    }
}
