
const Model = () => {

  return (
    <div style={{ position: 'relative', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          padding: '20px',
          backgroundColor: 'lightblue',
          border: '1px solid blue',
          borderRadius: '5px'
        }}>
        </div>
    </div>
  );
};

export default Model;
