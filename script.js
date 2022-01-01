//title
let h1=document.createElement('h1')
h1.innerText='THIRUKKURAL / திருக்குறள்'
h1.setAttribute('id','title')
h1.classList.add("text-center",'my-2')
document.body.appendChild(h1)

//container
let main=document.createElement('div')
main.classList.add("container")
document.body.appendChild(main)

//row
let thiru=document.createElement('div')
let row_th=document.createElement('div')
row_th.classList.add('row','mt-3')
//col-1
let col_th1=document.createElement('div')
col_th1.classList.add('text-center','col-sm-12','col-md-4','col-lg-4','col-xl-4','my-auto')
//image
let img1=document.createElement('img')
img1.classList.add('img-fluid','icon','mt-2')
img1.setAttribute('src','thiruvalluvar3.png')
col_th1.appendChild(img1)
let name_1=document.createElement('div')
//name
name_1.innerText="THIRUVALLUVAR / திருவள்ளுவர்"
col_th1.appendChild(name_1)

//col-2
let col_th2=document.createElement('div')
col_th2.classList.add('col-sm-12','col-md-4','col-lg-4','col-xl-4','my-3','p-3')
col_th2.innerHTML="<u>வாழ்க்கை வரலாறு / ABOUT :</u> <br><br>பெற்றோர்கள் - பகவன் ,ஆதி<br>PARENTS - BAGAVAN, ADHI <br>பிறந்த வருடம் – கி .பி. 2ஆம் நூற்றாண்டு<br>YEAR OF BORN - 2 AD <br>பிறந்த இடம் – மயிலாப்பூர்<br>PLACE OF BIRTH - MYLAPORE<br>மனைவியின் பெயர் – வாசுகி <br>SPOUSE - VASUKI <br>வசித்த இடம் – மயிலாப்பூர்<br>PLACE OF LIVING - MYLAPORE <br>"

//col-3
let col_th3=document.createElement('div')
col_th3.classList.add('col-sm-12','col-md-4','col-lg-4','col-xl-4','my-auto')
col_th3.innerHTML='<u>நூல் குறிப்பு / ABOUT THIRUKKURAL BOOK </u><br><br>133-அதிகாரங்கள் / 133 - CHAPTERS <br>1330 திருக்குறள் / 1330 - COUPLETS<br><br><u>முப்பால் - THREE MAJOR DIVISIONS</u><br>அறத்துப்பால் - Virtue<br>பொருட்பால் - Wealth<br>இன்பத்துப்பால் - Love<br>'

row_th.appendChild(col_th1)
row_th.appendChild(col_th2)
row_th.appendChild(col_th3)
thiru.appendChild(row_th)
main.appendChild(thiru)


for(let i=0;i<1330;i++){
    fetch(`https://api-thirukkural.vercel.app/api?num=${i}`)
    .then((d)=>d.json())
    .then((data)=>{
    let row=document.createElement('div')
    row.classList.add('row')
    main.appendChild(row)

    //--------------first col--------------------//

    let col=document.createElement('div')
    col.classList.add('col-sm-12','col-md-6','col-lg-6','col-xl-6','my-3')
    row.appendChild(col)
    //card 1
    let div_card=document.createElement('div')
    div_card.classList.add('card','h-100')
    col.appendChild(div_card)
    //card header 1
    let div_head=document.createElement('div')
    div_head.classList.add('card-header','text-center')
    let tit=document.createElement('h5')
    tit.classList.add('card-header',"tit")
    tit.innerHTML=`COUPLET  No: ${data.number} ${data.sect_eng}`
    div_head.appendChild(tit)
    div_card.appendChild(div_head)
    // card body 1
    let div_body=document.createElement('div')
    div_body.classList.add('card-body','text-center','bg-info')
    div_card.appendChild(div_body)
    let chap=document.createElement('h4')
    chap.classList.add('chap_name')
    chap.innerHTML=`${data.chap_eng}`
    div_body.appendChild(chap)
    //inside body text
    let d1=document.createElement('div')
    d1.classList.add('card-text')
    div_body.appendChild(d1)
    let div_1 = document.createElement('div')
    let t_kural=document.createElement('span')
    t_kural.classList.add('my-1')
    let t_exp=document.createElement('div')
    t_exp.classList.add('my-1')
    t_kural.innerHTML=`<span class="COUPLET_tit">COUPLET :</span><br> `
    let con=document.createElement('div')
    con.classList.add("e_COUPLET")
    con.innerHTML=(`${data.eng}`)
    t_kural.appendChild(con)
    t_exp.innerHTML='<span class="COUPLET_exp">Explanation:</span><br>'
    let dd=document.createElement('div')
    dd.innerHTML=`${data.eng_exp}`
    t_exp.append(dd)
    div_1.appendChild(t_kural)
    div_1.appendChild(t_exp)

    d1.appendChild(div_1)


//--------------second col------------------------//

    //col2
    let col2=document.createElement('div')
    col2.classList.add('col-sm-12','col-md-6','col-lg-6','col-xl-6','my-3')
    row.appendChild(col2)
    //card 1
    let div_card2=document.createElement('div')
    div_card2.classList.add('card','h-100')
    col2.appendChild(div_card2)
    //card header 1
    let div_head2=document.createElement('div')
    div_head2.classList.add('card-header','text-center')
    let tit2=document.createElement('h5')
    tit2.classList.add('card-header','tit')
    tit2.innerHTML=`குறள் எண்: ${data.number} ${data.sect_tam} `
    div_head2.appendChild(tit2)
    div_card2.appendChild(div_head2)
    // card body 2
    let div_body2=document.createElement('div')
    div_body2.classList.add('card-body','text-center','bg-warning')
    div_card2.appendChild(div_body2)
    let chap2=document.createElement('h4')
    chap2.classList.add('chap_name')
    chap2.innerHTML=`${data.chap_tam}`
    div_body2.appendChild(chap2)
    //inside body text
    let d2=document.createElement('div')
    d2.classList.add('card-text')
    div_body2.appendChild(d2)
    let div_2 = document.createElement('div')
    let e_kural=document.createElement('span')
    let e_exp=document.createElement('div')
    e_kural.innerHTML=`<span class="COUPLET_tit">குறள்:</span><br> `
    let con_2=document.createElement('div')
    con_2.classList.add('fw-bold')
    let l1=document.createElement('div')
    let l2=document.createElement('div')
    l1.innerHTML=(`${data.line1}`) 
    l2.innerHTML=(`${data.line2}`)
    con_2.appendChild(l1)
    con_2.appendChild(l2)
    e_kural.appendChild(con_2)
    e_exp.innerHTML='<span class="COUPLET_exp">பொருள்:</span>'
    let dd2=document.createElement('div')
    dd2.innerHTML=`${data.tam_exp}`
    e_exp.append(dd2)
    div_2.appendChild(e_kural)
    div_2.appendChild(e_exp)

    d2.appendChild(div_2)
    })
    .catch((er)=>{
        console.log("Error");
    })
}
