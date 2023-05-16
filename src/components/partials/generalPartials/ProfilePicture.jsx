const ProfilePicture = ({className}) =>{
    return(

<div className="profilepic">
    <div className="profilepic-wrapper">
        <div className="profilepic">
            <div className="profilepic-outer-circle">
                    <div className='profilepic-picture'>
                        <img src={require('../../../assets/images/showcase.png')} />
                    </div>
            </div>
            <div className="small-camera-circle">
                <i class={`profilepic-camera-icon fa-thin ${className}`}></i>
            </div>
        </div>
    </div>
</div>
)}
export default ProfilePicture;