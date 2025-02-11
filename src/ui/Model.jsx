
const Model = ({account}) => {

  return (
    <div style={
      { 
 position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  backdropFilter: 'blur(4px)',
  zIndex: '1000',
  transition: 'all 0.5s', 
}
        }>
        <div style={{
         position: 'fixed',
         top: '50%',
         left: '50%',
         transform: 'translate(-50%, -50%)',
         backgroundColor: 'rgb(20, 203, 220)',
         borderRadius: '10px',
         boxShadow: '2px 2px 10px',
         padding: '5rem 6rem',
         transition: 'all 0.5s',
         fontSize:'30px',
         border:'solid 1px green',
         zIndex:'1100'
         
        }}>
          {account.lastName} {account.name}
        </div>
    </div>
  );
};

export default Model;
