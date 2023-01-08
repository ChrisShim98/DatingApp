namespace API.Interfaces
{
    public interface IUnitOfWork
    {
        IUserRepository UserRepository {get;}
        IMessage MessageRepository {get;}
        ILikesRepository LikesRepository {get;}
        Task<bool> Complete();
        bool HasChanges();
    }
}