<script>
    import { page } from "$app/stores";

    export const data = $page.form;

    import { browser } from "$app/environment";


</script>

<body>
    <div class="allCenter">
        <div class="content pt-2.5 min-h-screen">
            <div class="cardcontainer">
                <div class="cards p-2.5">
                    <form action="?/CreateShift" method="post">
                        <input type="datetime-local" name="shiftFrom" />
                        <input type="datetime-local" name="shiftTo" />
                        <input
                            type="number"
                            name="requiredStaff"
                            placeholder="Number of employees"
                        />
                        <input type="submit" value="Add" class="on" />
                    </form>
                </div>
            </div>
        </div>
    </div>
</body>

<style>
    @font-face {
        font-family: normalFont;
        src: url($lib/fonts/Sequel100Black-55.ttf);
    }
    * {
        font-family: normalFont;
    }
    body {
        background: #161616;
    }

    .allCenter {
        padding-top: 50px;
    }

    .on {
        width: 200px;
        padding: 10px;
        text-align: center;
        border-radius: 10px;

        background: linear-gradient(
            142deg,
            rgba(129, 65, 62, 1) 0%,
            rgba(106, 0, 0, 1) 100%
        );
        color: white;
    }
    .on:hover {
        cursor: pointer;
    }
    form {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 20px;
    }

    .content {
        width: 100%;
        height: 100%;
    }

    .cardcontainer {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .cards {
        display: flex;
        flex-wrap: wrap;
        gap: 50px;
    }
    input {
        font-family: italicFont;
        width: 100%;
        padding: 20px;
        font-size: 20px;
        color: #fff;
        background-color: rgb(28, 28, 30);
        box-shadow: 0 0 0.4vw rgba(0, 0, 0, 0.5), 0 0 0 0.15vw transparent;
        border-radius: 10px;
        border: none;
        outline: none;
        transition: 0.4s;
    }
    input:hover {
        box-shadow: 0 0 0 0.15vw rgba(235, 135, 135, 0.186);
    }

    input:focus {
        box-shadow: 0 0 0 0.15vw #d2042d;
    }

    @media (max-width: 700px) {
        .allCenter {
            padding-top: 0;
        }
    }
</style>
