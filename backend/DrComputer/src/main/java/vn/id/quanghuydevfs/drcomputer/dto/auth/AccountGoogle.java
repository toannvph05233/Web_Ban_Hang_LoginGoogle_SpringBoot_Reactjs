package vn.id.quanghuydevfs.drcomputer.dto.auth;

public class AccountGoogle {
    private long id;
    private String imageUrl;
    private String email;
    private String name;
    private String givenName;
    private String familyName;

    public AccountGoogle() {
    }

    public AccountGoogle(long id, String imageUrl, String email, String name, String givenName, String familyName) {
        this.id = id;
        this.imageUrl = imageUrl;
        this.email = email;
        this.name = name;
        this.givenName = givenName;
        this.familyName = familyName;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getGivenName() {
        return givenName;
    }

    public void setGivenName(String givenName) {
        this.givenName = givenName;
    }

    public String getFamilyName() {
        return familyName;
    }

    public void setFamilyName(String familyName) {
        this.familyName = familyName;
    }
}

