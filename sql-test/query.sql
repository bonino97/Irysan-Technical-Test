SELECT  u.name, u.email, SUM(p.price * o.quantity) AS total
FROM users u
       INNER JOIN orders o
       ON u.id = o.user_id
       INNER JOIN products p
       ON o.product_id = p.id
WHERE p.category = 'Electronics'
       GROUP BY  u.id
       HAVING COUNT(o.user_id) >= 3 AND SUM(p.price * o.quantity) > 1000
       ORDER BY total DESC;