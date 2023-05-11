interface IError {
  message: string;
}

const SuccessMessage = ({ message }: IError) => {
  return (
    <>
      {message && (
        <div className=''>
          <div className='mt-2 rounded-md border bg-green-600 py-1 text-center text-white'>
            {message}
          </div>
        </div>
      )}
    </>
  );
};

export default SuccessMessage;
