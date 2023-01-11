using Kahanki.Data;
using Kahanki.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Kahanki.Controllers
{
    public class BaseController<TEntity> : Controller where TEntity : class, IEntity
    {
        private readonly ApplicationDbContext _dbContext;
        private readonly DbSet<TEntity> _dbSet;


        public BaseController()
        {
            var dbContext = (ApplicationDbContext)HttpContext.RequestServices.GetService(typeof(ApplicationDbContext))!;

            _dbContext = dbContext;
            _dbSet = _dbContext.Set<TEntity>();
        }

        [HttpPost]
        public TEntity Create(TEntity entity)
        {
            _dbSet.Add(entity);
            _dbContext.SaveChanges();

            return _dbSet.Single(c => c.Id == entity.Id);
        }

        [HttpGet]
        public TEntity Read(Guid id)
        {
            return _dbSet.Single(c => c.Id == id);
        }

        [HttpPost]
        public TEntity Update(TEntity entity)
        {
            _dbSet.Update(entity);
            _dbContext.SaveChanges();

            return _dbSet.Single(c => c.Id == entity.Id);
        }

        [HttpPost]
        public void Delete(Guid id)
        {
            var entity = _dbSet.FirstOrDefault(r => r.Id == id);
            _dbSet.Remove(entity);

            _dbContext.SaveChanges();
        }   

        [HttpGet]
        public IEnumerable<TEntity> GetAll()
        {
            return _dbSet.ToList();
        }

    }
}
