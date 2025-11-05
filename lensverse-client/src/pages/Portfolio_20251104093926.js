/* Portfolio.css */
.portfolio-header {
  background-color: #000;
  padding: 60px 0 30px;
}

.portfolio-item {
  transition: transform 0.3s ease;
  overflow: hidden;
}

.portfolio-item:hover {
  transform: translateY(-5px);
}

.portfolio-image-wrapper {
  position: relative;
  overflow: hidden;
  aspect-ratio: 3/2;
}

.portfolio-image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.portfolio-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(220, 53, 69, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.portfolio-item:hover .portfolio-overlay {
  opacity: 1;
}

.overlay-content {
  text-align: center;
  padding: 20px;
  color: white;
}

.category-filters {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
}

@media (max-width: 768px) {
  .category-filters {
    flex-direction: row;
    overflow-x: auto;
    padding-bottom: 15px;
  }
}