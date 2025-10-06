//the permissions you have  ;  the permissions the current button needs  
function withPermissions(requiredPermissions:string[],userPermissions:string[]):(Componet:React.FC)=>React.FC{

    return function(Component:React.FC){
        return function(props:any):React.ReactElement|null{                     
            const hasPermission:boolean=requiredPermissions.every(item=>userPermissions.includes(item));
            if(!hasPermission){
                return null
            }
            return <Component {...props}/>
        }
    }
}

export default withPermissions