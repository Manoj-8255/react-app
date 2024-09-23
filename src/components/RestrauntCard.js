export const RestrauntCard = ({res}) => {
    const { name, cloudinaryImageId, cuisines, avgRating } = res?.info ?? {} ;
    return (
        <div className="res-card">
            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} alt="restraunt" />
            <h5>{name}</h5>
            <h5 className="cusiness">{cuisines?.slice(0,3).join(',')}</h5>
            <h5>{avgRating}</h5>
        </div>
    )
}