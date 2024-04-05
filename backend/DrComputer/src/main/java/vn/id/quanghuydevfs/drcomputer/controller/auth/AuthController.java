package vn.id.quanghuydevfs.drcomputer.controller.auth;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import vn.id.quanghuydevfs.drcomputer.dto.auth.AccountGoogle;
import vn.id.quanghuydevfs.drcomputer.dto.auth.AuthenticationDto;
import vn.id.quanghuydevfs.drcomputer.dto.auth.RegisterDto;
import vn.id.quanghuydevfs.drcomputer.service.AuthService;

import java.io.IOException;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/auth")
public class AuthController {
    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(@RequestBody RegisterDto request) {

        return ResponseEntity.ok(authService.register(request));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticationDto request) {
        return ResponseEntity.ok(authService.authenticate(request));
    }

    @PostMapping("/login-google")
    public ResponseEntity<AuthenticationResponse> authenticateGoogle(@RequestBody AccountGoogle accountGoogle) {
        return ResponseEntity.ok(authService.authenticateWithGoogle(accountGoogle));
    }
    @PostMapping("/refresh-token")
    public void refreshToken(
            HttpServletRequest request,
            HttpServletResponse response
    ) throws IOException {
        authService.refreshToken(request, response);
    }
    @PostMapping("/logout")
    public void logout(
            HttpServletRequest request,
            HttpServletResponse response,
            Authentication authentication
    ) throws IOException {
        authService.logout(request, response,authentication);
    }
}
