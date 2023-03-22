<script>
    
    // @ts-nocheck
    export let MovieTitle;
    export let date;
    export let description;
</script>

<h3 class="up">Upcoming Movies</h3>
<div class="upcard">
    <p class="cim pt-16">{MovieTitle}</p>
    <div class="coming pb-5">{date}</div>
    <div class="desc text-center">
        {description}
    </div>
</div>

<style>
    .upcard {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .coming {
        font-size: 13px;
    }
    .desc {
        font-size: 10px;
    }
    h3 {
        color: white;
    }
    .upcard {
        width: 200px;
        height: 200px;
        border-radius: 10px;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        color: white;
        background-image: linear-gradient(
                to bottom,
                rgba(245, 246, 252, 0),
                rgba(40, 40, 40, 0.73)
            ),
            url("../../lib/images/avatar.jpg");
    }
    .up {
        padding-bottom: 5px;
    }
</style>
