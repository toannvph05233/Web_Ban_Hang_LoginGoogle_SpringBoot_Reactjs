package com.java.api.dto;


import com.java.api.model.Category;

public class ProductDto {
	
	    private String title;
	    private String description;
	    private Category category;
	    private int price;
	    private int storage;
	private String img1;
	private String img2;

	public String getImg1() {
		return img1;
	}

	public void setImg1(String img1) {
		this.img1 = img1;
	}

	public String getImg2() {
		return img2;
	}

	public void setImg2(String img2) {
		this.img2 = img2;
	}

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

	public ProductDto(String title, String description, Category category, int price, int storage, String img1, String img2) {
		this.title = title;
		this.description = description;
		this.category = category;
		this.price = price;
		this.storage = storage;
		this.img1 = img1;
		this.img2 = img2;
	}

	public ProductDto() {
			super();
		}
		

}
