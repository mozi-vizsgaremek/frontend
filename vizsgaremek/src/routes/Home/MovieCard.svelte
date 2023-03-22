<script>


    // @ts-ignore
    export let title;
    // @ts-ignore
    export let secondTitle;
    export let url;

    
    
</script>

<div class="card" >
    <div class="appear">
        <div class="title">{title}</div>
        <div class="secondTitle">{secondTitle}</div>
        <button>Book</button>
    </div>
</div>

<style>
    .card {
        border-radius: 10px;
        width: 170px;
        height: 250px;
        background-position: center;
        background-image: url('/src/lib/images/avatar.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
        transition: all 0.3s;
        z-index: 1;
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
        gap: 10px;
        opacity: 0;
    }
    .title,
    .secondTitle {
        color: white;
    }
    .secondTitle {
        font-size: 10px;
    }
    .card:hover .appear {
        opacity: 1;
        animation: 0.5s ease-in-out load;
    }
    @keyframes load {
        0% {
            opacity: 0;
            transform: translateY(100px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>
