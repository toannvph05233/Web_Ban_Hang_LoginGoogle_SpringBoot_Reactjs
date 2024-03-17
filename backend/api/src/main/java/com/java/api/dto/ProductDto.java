package com.java.api.dto;


import com.java.api.model.Category;

public class ProductDto {
	
	    private String title;
	    private String description;
	    private Category category;
	    private int price;
	    private int storage;
		public String getTitle() {
			return title;
		}
		public void setTitle(String title) {
			this.title = title;
		}
		public String getDescription() {
			return description;
		}
		public void setDescription(String description) {
			this.description = description;
		}
		
		public Category getCategory() {
			return category;
		}
		public void setCategory(Category category) {
			this.category = category;
		}
		public int getPrice() {
			return price;
		}
		public void setPrice(int price) {
			this.price = price;
		}
		public int getStorage() {
			return storage;
		}
		public void setStorage(int storage) {
			this.storage = storage;
		}
		
		public ProductDto(String title, String description, Category category, int price, int storage) {
			super();
			this.title = title;
			this.description = description;
			this.category = category;
			this.price = price;
			this.storage = storage;
		}
		public ProductDto() {
			super();
		}
		

}
