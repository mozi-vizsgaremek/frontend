<script>
    // @ts-ignore
	import { createForm } from 'felte'
	
	export let initialValues;
	export let onSubmit;
	
	const { form } = createForm({ onSubmit, initialValues })
</script>


<div class="mininav p-2.5">
    
        <form use:form>
        <h3 class="alma active_mini"><button >Upcoming Shows</h3>
        <h3 class="alma"><button type="submit">Past Shows</button></h3>
    </form>
    </div>
<div class="ticket_card">
    <div class="dates">
        <div class="date">2023/01/02</div>
        <div class="time">17:50</div>
    </div>
    <div class="titlecont">
        <h2>Avatar 2</h2>
    </div>
    <div class="desccont">
        <p>When a man wakes up, he doesn’t remember
            anything about himself or even his name </p>
    </div>
    <div class="btncont">
        <button class="qr">Print ticket</button>
    </div>
</div>

<style>
     @font-face {
         font-family: normalFont;
         src: url(../../lib/fonts/Sequel100Black-55.ttf);
       }
       *{
        font-family: normalFont;
       }
       .alma{
            border-bottom: 2px solid gray;
        }
        .active_mini{
            border-color: white;
        }
        .mininav{
            display: flex;
            gap: 10px;
            color: white;
        }
       .desccont{
            padding-top: 10px;
            text-align: center;
            font-size: 10px;
            color: rgb(187, 187, 187);
        }
        .ticket_card{
            width: 250px;
            height: 350px;
            background-image:
            linear-gradient(to bottom, rgba(40, 40, 40, 0.4), rgba(40, 40, 40, 0.9)),
                            url('../../lib/images/avatar.jpg');
            border-radius: 10px;
        }
        .dates{
            padding: 10px;
            display: flex;
            justify-content: space-between;
            font-size: 8px;
            color: white;
        }
        form{
            display: flex;
            gap: 10px;
        }
        .titlecont{
            text-align: center;
            padding-top: 120px;
        }
        .btncont{
            display: flex;
            justify-content: center;
        }
        .qr{
            margin-top: 40px;
            border-radius: 10px;
            color: white;
            font-size: 12px;
            width: 200px;
            height: 40px;
            text-align: center;
            background: linear-gradient(180deg, rgba(43,50,58,1) 0%, rgba(23,28,33,1) 100%);
            padding: 10px;
            box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        }
        h2{
            color: white;
        }
</style>

