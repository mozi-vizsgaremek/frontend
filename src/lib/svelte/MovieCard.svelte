<script>
    // @ts-nocheck

    // @ts-ignore
    export let title;
    // @ts-ignore
    export let secondTitle;
    export let url;
    export let idurl;
</script>

<a href={`./Datebooking/${idurl}`}>
    <div class="card" id="cardCover" style="background-image: url({url});">
        <div class="appear">
            <div class="title">{title}</div>
            <div class="secondTitle">{secondTitle}</div>
        </div>
    </div>
</a>

<style>
    .card {
        border-radius: 10px;
        width: 170px;
        height: 250px;
        background-color: #009b4d;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
        transition: all 0.3s;
        z-index: 1;
        backdrop-filter: blur(5px);
        border-radius: 20px;
    }

    .card:hover {
        transform: scale(1.05);
        cursor: pointer;
        z-index: 1;
    }

    .appear {
        padding-top: 20px;
        text-align: center;
        display: flex;
        flex-direction: column;
        height: 100%;
        gap: 10px;
        color: white;
        border-radius: 10px;
    }
    .title{
        color: #FFCC00;
    }
    .secondTitle {
        color: #FAF5E9;
        font-size: 12px;
    }
    .card:hover .appear {
        padding-bottom: 10px;
        opacity: 1;
    }

   
</style>
