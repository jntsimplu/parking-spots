var oneSelected=0;
var parkingLots=[];
parkingLots.fill(0,0,89);
console.log(parkingLots);
function slotSelected(){
    /*variables*/
    selectedId=event.srcElement.id;
    selectedColor=document.getElementById(selectedId).style.backgroundColor;
    if (oneSelected===0){
        document.getElementById(selectedId).style.backgroundColor='orange';
        oneSelected=1;
        document.querySelector('.btn-buy').addEventListener('click',function(){
            document.getElementById(selectedId).style.backgroundColor='red';
            oneSelected=0;
            selectedId='';
        });
        document.querySelector('.btn-rej').addEventListener('click',function(){
            document.getElementById(selectedId).style.backgroundColor='rgb(66, 134, 49)';
            oneSelected=0;
            selectedId='';
        });
    }
    if (oneSelected===1&&selectedColor==='red'){
        document.getElementById(selectedId).style.backgroundColor='blue';
        document.querySelector('.btn-buy').addEventListener('click',function(){
            alert('You cant buy a lot twice!');
            selectedId='';
            oneSelected=0;
        });
        document.querySelector('.btn-rej').addEventListener('click',function(){
            document.getElementById(selectedId).style.backgroundColor='rgb(66, 134, 49)';
            oneSelected=0;
            selectedId='';
        });
    }
}