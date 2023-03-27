<script>
// @ts-nocheck

let isDropdownOpen = false // default state (dropdown close)

const handleDropdownClick = () => {
  isDropdownOpen = !isDropdownOpen // togle state on click
}

const handleDropdownFocusLoss = ({ relatedTarget, currentTarget }) => {
  // use "focusout" event to ensure that we can close the dropdown when clicking outside or when we leave the dropdown with the "Tab" button
  if (relatedTarget instanceof HTMLElement && currentTarget.contains(relatedTarget)) return // check if the new focus target doesn't present in the dropdown tree (exclude ul\li padding area because relatedTarget, in this case, will be null) 
  isDropdownOpen = false
}
</script>


<nav>
    <div class="logo">C<p>V</p></div>
    <ul>
        <li><a href="./Home" class="active">Home</a></li>
        <li><a href="./Discover">Explore</a></li>
        <li><a href="./Tickets">Tickets</a></li>
    </ul>
    <div class="profile" on:focusout={handleDropdownFocusLoss}>
		<button class="btn m-1" on:click={handleDropdownClick} >
            
		</button>
		<ul class="dropdown-content menu p-2 shadow bg-black rounded-box w-52" style:visibility={isDropdownOpen ? 'visible' : 'hidden'}>
			<li><button class="btn text-slate-300"><a href="./Settings">Settings</a></button></li>
			<li><button class="btn text-slate-300"><a href="./">Logout</a></button></li>
		</ul>
	</div>
</nav>

<style>
    
    nav{
        background: #161616;
        position: fixed;
        top: 0;
        display: flex;
        align-items: center;
        width: 100%;
        height: 50px;
        justify-content: space-between;
        color: white;
    }
    .logo{
        margin-left: 100px;
        display: flex;
    }
    p{
        color: #D2042D;
    }
    ul{
        display: flex;
        gap: 30px;
    }
    li{
        display: flex;
        transition: all 0.5s;
    }
    li:hover{
        color: #D2042D;
    }
    .active{
        color: #D2042D;
    }
    .profile{
        width: 35px;
        height: 35px;
        background-image: url('../../lib/images/avatar.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 50%;
        margin-right: 100px;
    }
    .profile ul{
        display: flex;
        flex-direction: column;
    }
    button{
        width: 35px;
        height: 35px;
        
        border-radius: 50%;
    }
    button:hover{
        cursor: pointer;
    }

</style>